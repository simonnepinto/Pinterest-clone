import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Pin(props) {
  let { urls } = props;
  return (
    <Wrapper>
      <Container>
        <LazyLoadImage alt="pin" src={urls?.regular}></LazyLoadImage>
        {/* <img alt="pin" src={urls?.regular} /> */}
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
