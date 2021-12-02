import React from "react";
import styled from "styled-components";

function Pin() {
  return (
    <Wrapper>
      <Container>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1638435055339-f94d05e4824f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        />
      </Container>
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    border-radius: 16px;
    cursor: zoom-in;
    width: 100%;
    object-fit: cover;
  }
`;
