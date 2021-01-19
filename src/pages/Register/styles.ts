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
    max-width: 20rem;
    margin-bottom: 25px;
  margin-top: 20px;

  }

  form {
    margin: 90px 0;
    min-width: 40px;
    max-width: 600px;
    text-align: center;

    h1 {
      margin-bottom: 10px;
    }
  }
`;


