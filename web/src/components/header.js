import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Icon from "./icon";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <HeaderStyled>
    <WrapperStyled>
      <BrandingStyled>
        <Link to="/">{siteTitle}</Link>
      </BrandingStyled>

      <ToggleNavButtonStyled onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </ToggleNavButtonStyled>

      {/* <nav className={cn(styles.nav, showNav && styles.showNav)}> */}
      <NavStyled>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </NavStyled>
    </WrapperStyled>
  </HeaderStyled>
);

export default Header;

const NavStyled = styled.nav`
  display: none;
  ul {
    margin: 0;
    padding: 0;

    li {
      a {
        display: block;
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        color: red;
      }
    }
  }
`;

const HeaderStyled = styled.div`
  position: relative;
  z-index: 100;
`;

const BrandingStyled = styled.div`
  font-weight: 600;
  flex: 1;

  a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;

    a:hover {
      color: red;
    }
  }
`;

const ToggleNavButtonStyled = styled.button`
  appearance: none;
  font-size: 25px;
  border: none;
  background: none;
  margin: 0;
  padding: calc(14 / 17 / 2 * 1rem);
  outline: none;
  color: inherit;

  svg {
    display: block;
    fill: inherit;
  }

  @media (min-width: 450px) {
    display: none;
  }
`;

const WrapperStyled = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 960px;
  padding: 1em;
  display: flex;

  @media (min-width: 450px) {
    padding: 1.5em 1.5em;
  }
`;
