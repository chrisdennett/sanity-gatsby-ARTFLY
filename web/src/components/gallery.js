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
        {node.pics.map(figure => {
          const { height, width } = figure.asset.metadata.dimensions;
          const isPortrait = height > width;
          const maxImgWidth = isPortrait ? 300 : 500;

          return (
            <FigureHolder key={figure.asset._id} style={{ width: maxImgWidth }}>
              <Figure node={figure} />
            </FigureHolder>
          );
        })}
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
  /* justify-content: space-evenly; */
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 550px) {
    padding: 0;
    background: none;
  }
`;

const FigureHolder = styled.div`
  margin: 10px;

  @media (max-width: 550px) {
    margin: 5px 0;
  }
`;
