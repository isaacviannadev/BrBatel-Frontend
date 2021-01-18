import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  margin-left: 320px;
  margin-right: 20px;

  img {
    max-width: 35vw;
    margin-bottom: 25px;
  }
  > p {
    margin-bottom: 20px;
  }

  form {
    margin: 90px 0;
    min-width: 40px;
    max-width: 600px;
    text-align: center;
  }
`;

export const ListItems = styled.section`
  background-color: #d8f1ec;
  flex: 1;
  top: 0;
  padding:30px;
  border-radius:20px;
`;

export const ItemInfo = styled.section`
  margin-top: 8px;
  background-color: #71cebb;

  display: flex;
  border-radius: 10px;

  header {
    justify-content: space-between;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    div {
      margin-left: 8px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 4px;
    li {
      & + li {
        margin-left: 20px;
      }
      strong {
        display: block;
        font-size: 16px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        font-size: 10px;

        color: #6c6c80;
      }
    }
  }
`;
