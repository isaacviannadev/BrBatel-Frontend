import React, { useState } from "react";
import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";

import {
  FiFileMinus,
  FiFileText,
  FiPackage,
  FiShoppingBag,
  FiTag,
} from "react-icons/fi";

import api from "../../services/api";
import crateImg from "../../assets/crate.svg";

import Input from "../../components/input";
import SideMenu from "../../components/sidebar";
import Button from "../../components/button";

import { Container, Content } from "./styles";
import { useToast } from "../../hooks/Toast";

const Register: React.FC = () => {
  const { addToast } = useToast();

  const history = useHistory();

  const [iName, setiMame] = useState("");
  const [aCur, setaCur] = useState("");
  const [aMin, setaMin] = useState("");
  const [pCost, setpCost] = useState("");
  const [pSell, setpSell] = useState("");

  async function handleSubmit() {
    const data = {
      itemName: iName,
      amountCurrent: aCur,
      amountMinimum: aMin,
      priceCost: pCost,
      priceSell: pSell,
    };


    console.log(data);
    await api.post("register", data);

    addToast({
      type: "success",
      title: "Item Cadastrado!",
      description: `${data.itemName} adicionado com sucesso`,
    });

    history.push("/dashboard");
  }

  return (
    <>
      <Container>
        <SideMenu />
        <Content>
          <img src={crateImg} alt="AddItem" />

          <Form onSubmit={handleSubmit}>
            <h1>Qual item quer cadastrar?</h1>

            <Input
              name="itemName"
              icon={FiPackage}
              placeholder="Nome do Item"
              value={iName}
              onChange={(e) => setiMame(e.target.value)}
            />
            <Input
              type="number"
              min="0"
              name="amountCurrent"
              icon={FiFileText}
              placeholder="Quantidade Atual"
              value={aCur}
              onChange={(e) => setaCur(e.target.value)}
            />
            <Input
              type="number"
              min="0"
              name="amountMinimum"
              icon={FiFileMinus}
              placeholder="Quantidade Mínima"
              value={aMin}
              onChange={(e) => setaMin(e.target.value)}
            />
            <Input
              name="priceCost"
              icon={FiTag}
              placeholder="$ Custo"
              value={pCost}
              onChange={(e) => setpCost(e.target.value)}
            />
            <Input
              name="priceSell"
              icon={FiShoppingBag}
              placeholder="$ Revenda"
              value={pSell}
              onChange={(e) => setpSell(e.target.value)}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Register;
