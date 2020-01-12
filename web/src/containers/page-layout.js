import React from "react";
import Header from "../components/header/header";
import "../global-styles.css";
import styled from "styled-components";
import RotoscopingLady from "../img/Rotoscoping.gif";

const PageLayout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <MainStyled>{children}</MainStyled>
    <FooterStyled>
      <Fini>
        <img src={RotoscopingLady} />
        <p>You know it's all over when the victorian lady jumps the stool.</p>
      </Fini>
      <div>© {new Date().getFullYear()} ArtFly</div>
    </FooterStyled>
  </>
);

export default PageLayout;

const Fini = styled.div`
  font-size: 14px;
  background: white;
  max-width: 240px;
  padding: 15px;
  border-radius: 5px;
  margin: 0 auto 50px auto;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);

  img {
    margin-bottom: 10px;
  }
`;

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
