import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 90px 30px;
  padding: 30px;
`;
function CardList({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}

export default CardList;
