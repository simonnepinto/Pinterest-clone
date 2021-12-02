import React from "react";
import styled from "styled-components";

function MainBoard() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  width: 80%;
`;
