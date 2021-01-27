import { shade } from "polished";
import styled from "styled-components";

export const Sidebar = styled.nav`
  box-shadow: 0px 5px 10px #5b5b5b;

  position: fixed;

  height: 100%;
  width: 300px;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #16d6be 0%, #0fd293 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 0 20px;
    width: 180px;
  }

  aside.app-sidebar {
    margin: 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      align-items: center;
      justify-content: space-between;

      h2 {
        text-align: center;
        line-height: 28px;
        color: #f0f4f3;
      }
    }
  }

  a.login {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    border-radius: 10px;
    border: 1px solid #f2fae2;
    background: transparent;
    font-size: 12px;
    text-decoration: none;

    color: #ffffff;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      border-color: #008000;
      color: #fff;
      background: #008040;
    }

    svg {
      margin: 6px;
      margin-left: 0;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  background-color: #69f3cd;
  border-radius: 2px 10px 10px 10px;

  transition: all 0.3s;

  img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
    border: 2px #2cc769 solid;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-left: -10px;
    line-height: 15px;

    span {
      color: #2cc769;
      font-size: 10px;
    }
    strong {
      color: #fff;
      font-size: 20px;
    }
  }

  &:hover {
    background-color: ${shade(0.2, "#266f5f")};
  }
`;

export const Logout = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  border-radius: 10px;
  border: 1px solid #fae2e2;
  background: transparent;
  font-size: 12px;

  color: #e04848;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    border-color: #a43d3d;
    color: #fff;
    background: #a43d3d;
  }

  svg {
    margin: 6px;
    margin-left: 0;
  }
`;
