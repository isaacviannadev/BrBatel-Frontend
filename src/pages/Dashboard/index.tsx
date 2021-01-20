import React, { useEffect, useState } from "react";
import {
  FiEdit2,
  FiPlusCircle,
  FiMinusCircle,
  FiXCircle,
} from "react-icons/fi";

import SideMenu from "../../components/sidebar";
import shopImg from "../../assets/shop.svg";
import api from "../../services/api";

import { useToast } from "../../hooks/Toast";
import { Container, Content, ItemInfo, ListItems } from "./styles";
import ModalEditItem from "../../components/editModal";

interface Item {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
}
interface ItemData {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const [items, setItems] = useState<Item[]>([]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item>({} as Item);

  useEffect(() => {
    api.get("register").then((res) => {
      setItems(res.data);
    });
  }, []);

  async function handleUpdateItem(item: Item): Promise<void> {
    await api
      .put<ItemData>(`/register/item/${editingItem.id}`, { ...item })
      .then((response) => {
        setItems(
          items.map((oldItem) =>
            oldItem.id === editingItem.id ? { ...response.data } : oldItem
          )
        );

        addToast({
          type: "success",
          title: "Item Atualizado!",
          description: `${item.itemName} atualizado com sucesso`,
        });
      })
      .catch((error) => {
        addToast({
          type: "error",
          title: "Erro",
          description: error.response.data.error,
        });
        console.log(error.response.data);
      });
  }

  async function handleDeleteClick(id: string): Promise<void> {
    await api.delete(`/register/item/${id}`);
    const itemsFiltered = items.filter((item) => item.id !== id);

    setItems(itemsFiltered);

    addToast({
      type: "success",
      title: "Item excluído!",
      description: "Item excluído com sucesso",
    });
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditClick(item: Item): void {
    console.log("Item", item);
    setEditingItem(item);
    toggleEditModal();
  }

  const handleSubOne = async (item: Item) => {
    try {
      const { data: responseData } = await api.patch<ItemData>(
        `/register/item/${item.id}`,
        {
          addAmount: Number(item.amountCurrent) - 1,
        },
      );

      if (item.amountCurrent - 1 === 0) {
        addToast({
          type: 'info',
          title: 'Atenção',
          description: 'Produto sem estoque',
        });
      }

      if (item.amountCurrent - 1 === item.amountMinimum) {
        addToast({
          type: 'info',
          title: 'Atenção',
          description: 'Seu produto está com a quantidade mínima',
        });
      }

      if (item.amountCurrent !== 0) {
        const findIndexItem = items.findIndex(
          item => item.id === responseData.id,
        );
        if (findIndexItem >= 0) {
          const newItems = items.fill(
            responseData,
            findIndexItem,
            findIndexItem + 1,
          );
          setItems([...newItems]);
        }
      }

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro',
        description: error.response.data.error,
      });
    }
  };

  const handleAddOne = async (item: Item) => {
    try {
      const { data: responseData } = await api.patch<Item>(
        `register/item/${item.id}`,
        {
          addAmount: Number(item.amountCurrent) + 1,
        },
      );

      const findIndexItem = items.findIndex(
        item => item.id === responseData.id,
      );
      if (findIndexItem >= 0) {
        const newItem = items.fill(
          responseData,
          findIndexItem,
          findIndexItem + 1,
        );
        setItems([...newItem]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SideMenu />
      <Content>
        <img src={shopImg} alt="Shop" />
        <h1> Bem-vindo ao seu estoque!</h1>
        <p>Aqui você pode gerenciar todos os itens da sua loja</p>

        <ListItems>
          <h1> Estoque </h1>
          <p>Esses são todos os seus itens</p>
          {items.map((item) => {


            return (
              <ItemInfo>
                <header>
                  <div className="editButton">
                    <button
                      type="button"
                      value={item.id}
                      onClick={() => {
                        handleEditClick(item);
                        toggleEditModal();
                      }}
                    >
                      <FiEdit2 />
                    </button>
                  </div>
                  <div className="editButton del">
                    <button
                      type="button"
                      value={item.id}
                      onClick={() => {
                        handleDeleteClick(item.id);
                      }}
                    >
                      <FiXCircle />
                    </button>
                  </div>
                  <div>
                    <strong>{item.itemName}</strong>
                  </div>
                </header>
                <ul>
                  <li
                    className={
                      item.amountCurrent < item.amountMinimum ? "negative" : ""
                    }
                  >
                    <span>Qtd. Atual</span>
                    <strong>
                      <FiMinusCircle onClick={() => {handleSubOne(item)}}/>
                      {item.amountCurrent}
                      <FiPlusCircle onClick={() => {handleAddOne(item)}} />
                    </strong>
                  </li>
                  <li>
                    <span>Qtd Min</span>
                    <strong>{item.amountMinimum}</strong>
                  </li>
                  <li>
                    <span>Preço Custo</span>
                    <strong>{item.priceCost}</strong>
                  </li>
                  <li>
                    <span>Preço Revenda</span>
                    <strong>{item.priceSell}</strong>
                  </li>
                </ul>
              </ItemInfo>
            );
          })}
          <ModalEditItem
            isOpen={editModalOpen}
            setIsOpen={toggleEditModal}
            handleUpdateItem={handleUpdateItem}
            editingItem={editingItem}
            deleteItem={handleDeleteClick}
          />
        </ListItems>
      </Content>
    </Container>
  );
};
export default Dashboard;
