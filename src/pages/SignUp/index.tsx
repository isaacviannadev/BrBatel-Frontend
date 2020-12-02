import React from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import {Form} from '@unform/web';

import logoImg from "../../assets/logo.svg";

import Input from "../../components/input";
import Button from "../../components/button";

import { Container, Content, Background } from "./styles";

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <h1>Faça seu Cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>

      </Form>
      <a href="/">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
  )
};

export default SignUp;
