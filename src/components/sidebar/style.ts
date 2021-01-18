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
`;
