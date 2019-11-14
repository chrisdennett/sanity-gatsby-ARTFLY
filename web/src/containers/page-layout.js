import React from "react";
import Header from "../components/header/header";
import "../global-styles.css";
import styled from "styled-components";

const PageLayout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <MainStyled>{children}</MainStyled>
    <FooterStyled>
      <div>© {new Date().getFullYear()} ArtFly</div>
    </FooterStyled>
  </>
);

export default PageLayout;

const MainStyled = styled.div`
  min-height: calc(100% - 73px - 120px);

  @media (min-width: 450px) {
    min-height: calc(100% - 88px - 150px);
  }
`;

const FooterStyled = styled.footer`
  padding: 2rem;
  text-align: center;
`;