import React, { useEffect, useState } from "react";
import { Form } from "@unform/web";
import {
  FiFileMinus,
  FiFileText,
  FiPackage,
  FiShoppingBag,
  FiTag,
  FiEdit2,
} from "react-icons/fi";

import Input from "../../components/input";
import SideMenu from "../../components/sidebar";
import Button from "../../components/button";

import api from "../../services/api";
import { Container, Content, ItemInfo, ListItems } from "./styles";
import { Link } from "react-router-dom";

interface Item {
  id: string;
  itemName: string;
  amountCurrent: number;
  amountMinimum: number;
  priceCost: string;
  priceSell: string;
  image: string;
}

const Register: React.FC = () => {
  const [item, setItem] = useState<Item[]>([]);

  console.log(item);

  useEffect(() => {
    api.get("register").then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <>
      <Container>
        <SideMenu />
        <Content>
          <ListItems>
          <h1> Cadastrar Item</h1>
          <p>Preencha os campos abaixo para cadastrar um novo item</p>
            {item.map((item) => {
              return (
                <ItemInfo>
                  <header>
                    <img src={item.image} alt="LukeShop" />
                    <div>
                      <strong>{item.itemName}</strong>
                    </div>
                    <Link to={`/register/item/${item.id}`}>
                      <FiEdit2 />
                    </Link>
                  </header>
                  <ul>
                    <li>
                      <span>Qtd. Atual</span>
                      <strong>{item.amountCurrent}</strong>
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
          <Form ref={() => {}} onSubmit={() => {}}>
            <h1>Qual item quer cadastrar?</h1>

            <Input
              name="itemName"
              icon={FiPackage}
              placeholder="Nome do Item"
            />
            <Input
              name="amountCurrent"
              icon={FiFileText}
              placeholder="Quantidade Atual"
            />
            <Input
              name="amountMinimum"
              icon={FiFileMinus}
              placeholder="Quantidade Mínima"
            />
            <Input name="priceCost" icon={FiTag} placeholder="$ Custo" />
            <Input
              name="priceSell"
              icon={FiShoppingBag}
              placeholder="$ Revenda"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Register;
