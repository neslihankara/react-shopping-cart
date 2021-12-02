import React from "react";
import styled from "styled-components";

type IProps = {
  id: number;
  name: string;
  price: number;
};

const StyledDiv = styled.div({
  maxWidth: "450px",
  backgroundColor: "green",
});

const ProductCard: React.FC<IProps> = ({ id, name, price }) => (
  <StyledDiv>
    <p>{id}</p>
    <h3>{name}</h3>
    <h5>{price}</h5>
  </StyledDiv>
);

export default ProductCard;
