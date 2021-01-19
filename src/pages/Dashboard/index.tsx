import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  FiEdit2,
  FiPlusCircle,
  FiMinusCircle,
  FiXCircle,
} from "react-icons/fi";

import SideMenu from "../../components/sidebar";
import shopImg from "../../assets/shop.svg";
import api from "../../services/api";

import { Container, Content, ItemInfo, ListItems } from "./styles";

interface Item {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
}

interface ItemParams {
  id: string;
}

const Dashboard: React.FC = () => {
  const params = useParams<ItemParams>();
  const history = useHistory();

  const [items, setItems] = useState<Item[]>([]);
  const [add, setAdd] = useState("");
  const [sub, setSub] = useState("");

  // console.log(items);

  useEffect(() => {
    api.get("register").then((res) => {
      setItems(res.data);
    });
  }, []);

  function handleEditClick() {}
  function handleDeleteClick() {}
  function handleSubOne() {}
  function handleAddOne() {}

  return (
    <>
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
              if (!item) {
                <h3>Nenhum item cadastrado!</h3>;
              }

              return (
                <ItemInfo>
                  <header>
                    <div className="editButton">
                      <button
                        type="button"
                        value={item.id}
                        onClick={handleEditClick}
                      >
                        <FiEdit2 onClick={handleEditClick} />
                      </button>
                    </div>
                    <div className="editButton del">
                      <button
                        type="button"
                        value={item.id}
                        onClick={handleDeleteClick}
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
                        item.amountCurrent < item.amountMinimum
                          ? "negative"
                          : ""
                      }
                    >
                      <span>Qtd. Atual</span>
                      <strong>
                        <FiMinusCircle onClick={handleSubOne} />
                        {item.amountCurrent}
                        <FiPlusCircle onClick={handleAddOne} />
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
          </ListItems>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
