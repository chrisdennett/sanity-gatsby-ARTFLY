import React from "react";
import styled from "styled-components";

const SectionHeader = ({ title, description }) => {
  return (
    <HEADER>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </HEADER>
  );
};

export default SectionHeader;

const lineColour = `rgba(0, 0, 0, 0.2)`;

const HEADER = styled.div`
  text-align: center;
  padding: 20px 0 20px 0;
  border-top: 5px double ${lineColour};
  border-bottom: 5px double ${lineColour};
`;
