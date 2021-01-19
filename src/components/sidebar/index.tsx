import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";

import { Sidebar, Logout } from "./style";

import imgLogo from "../../assets/logo.png";
import { FiArrowLeft } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";


function SideMenu() {
  const { signOut } = useAuth();

  return (
    <Sidebar>
      <img src={imgLogo} alt="LukeShop" />
      <Logout onClick={signOut} > Sair</Logout>
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
