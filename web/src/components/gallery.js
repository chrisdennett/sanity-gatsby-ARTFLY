import React from "react";
import styled from "styled-components";
import Figure from "./figure";

export default ({ node }) => {
  if (!node.pics || node.pics.length === 0) {
    return null;
  }

  return (
    <Outer>
      <Wrapper>
        {node.pics.map(figure => (
          <FigureHolder key={figure.asset._id}>
            <Figure node={figure} />
          </FigureHolder>
        ))}
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  /* position: relative; */
`;

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FigureHolder = styled.div`
  margin: 5px;
`;
