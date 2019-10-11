import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import HoverLogo from "./HoverLogo";

const Header = () => (
  <HeaderStyled>
    <Link to="/">
      <span>ArtFly</span>
      <HoverLogo />
      <span>Projects</span>
    </Link>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.div`
  font-weight: 600;
  padding: 1.5em;

  a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    a:hover {
      color: red;
    }

    span {
      font-size: 34px;
      letter-spacing: 2px;
    }
  }
`;

const WrapperStyled = styled.div``;
