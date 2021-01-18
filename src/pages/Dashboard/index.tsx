import React from "react";

import SideMenu from "../../components/sidebar";
import { Container, Content } from "./styles";

import shopImg from '../../assets/shop.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
      <SideMenu />
        <Content>
          <img src={shopImg} alt="Shop"/>
          <h1> Bem vindo ao seu estoque!</h1>
          <p>Aqui você pode gerenciar todos os items da sua loja</p>

        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
