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
  margin-left:  320px;
  margin-right: 20px;

  img {
    max-width: 35vw;
    margin-bottom: 25px;
  }
  > p {
    margin-bottom: 20px;
  }


`;
