import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";

import { Sidebar, Logout, User } from "./style";

import imgLogo from "../../assets/logo.png";
import userIMG from "../../assets/user.svg";

import { FiArrowLeft, FiPower, FiCoffee } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

function SideMenu() {


  const { signOut, user } = useAuth();

  return (
    <Sidebar>
      <img src={imgLogo} alt="LukeShop" />

      {user ? (
        <User>
          <img src={userIMG} alt="avatar" />
          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </User>
      ) : (
        <Link to="/signin" className='login'>
          <FiCoffee />
          Faça seu Login
        </Link>
      )}
      {user ?
      <Logout onClick={signOut}>
        <FiPower />
        Sair
      </Logout>
       : <></>
      }
      <aside className="app-sidebar">
        <div>
          <h2>Selecione a opção desejada:</h2>

          <Link to="/register">
            <Button type="button">Cadastrar</Button>
          </Link>
        </div>
      </aside>
      <Link to="/dashboard">
        <FiArrowLeft size={40} color="#fff" />
      </Link>
    </Sidebar>
  );
}

export default SideMenu;
