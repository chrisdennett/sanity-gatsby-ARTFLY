import React from "react";
import styled from "styled-components";
import Figure from "./figure";

export default ({ node }) => {
  if (!node.pics || node.pics.length === 0) {
    return null;
  }

  return (
    <Outer>
      {node.pics.map(figure => (
        <FigureHolder key={figure.asset._id}>
          <Figure node={figure} />
        </FigureHolder>
      ))}
    </Outer>
  );
};

const Outer = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
`;

const FigureHolder = styled.div`
  min-width: 375px;
  margin: 5px;
`;
