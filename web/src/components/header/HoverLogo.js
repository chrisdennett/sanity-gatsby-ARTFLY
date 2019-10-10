import React from "react";
import styled from "styled-components";

const HoverLogo = () => (
  <SvgStyled viewBox="0 0 153 153">
    <FlyGroupStyled>
      <path
        d="M95.84 147c7.464-.427 15.57-9.89 9.66-20.65-5.727-10.44-14.36-19.27-14.36-19.27-14.85 10.37-7.205 40.93 4.702 39.92z"
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M145.9 112.8c-5.492 12.88-22.3 21.91-35.24 13.49-12.55-8.164-21.31-20.44-21.31-20.44 22.67-20.91 65.34-19.59 56.55 6.944zM1.523 52.73c.441-7.478 9.914-15.58 20.67-9.68 10.43 5.72 19.27 14.36 19.27 14.36-10.37 14.85-40.92 7.205-39.94-4.681z"
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M35.8 2.652c-12.88 5.492-21.91 22.3-13.49 35.24 8.164 12.55 20.44 21.31 20.44 21.31 20.91-22.66 19.59-65.34-6.944-56.55z"
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M123.1 73.5L75.62 26.02l51.26-3.781-1.891 25.63z"
        fill="#e9ddaf"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M106.2 23.82c7.531 4.244 14.17 10.23 19.24 19.24l1.534-20.77z"
        fill="red"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M87.93 40.49c14.05 1.437 19.09 9.899 20.89 20.89l-61.79 61.79-20.89-20.89z"
        fill="#fc0"
        stroke="#000"
        strokeWidth="3"
      />
      <path
        d="M73.76 26.32c11.61-1.004 14.52 5.324 14.3 14.3l-61.79 61.79-14.3-14.3zM108.7 61.25c11.61-1.004 14.52 5.324 14.3 14.3l-61.79 61.79-14.3-14.3z"
        fill="#f60"
        stroke="#000"
        strokeWidth="3"
      />
      <ellipse
        transform="rotate(45)"
        cx="84.55"
        cy="-4.478"
        rx="20.44"
        ry="20.7"
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
      />
      <ellipse transform="rotate(45)" cx="84.55" cy="-4.478" rx="9.527" ry="9.646" />
      <ellipse
        transform="rotate(45)"
        cx="125.1"
        cy="-4.478"
        rx="20.44"
        ry="20.7"
        fill="#fff"
        stroke="#000"
        strokeWidth="3"
      />
      <ellipse transform="rotate(45)" cx="125.1" cy="-4.478" rx="9.527" ry="9.646" />
      <path
        d="M13.54 111l-3.09-21.47 22.85 5.169 21.74 20.33 4.589 23.54-21.24-3.281z"
        fill="#e9ddaf"
        stroke="#000"
        strokeWidth="3"
      />
      <ellipse
        transform="rotate(45)"
        cx="105.6"
        cy="56.01"
        rx="10.24"
        ry="2.497"
        fill="red"
        stroke="#000"
        strokeWidth="3"
      />
      <ellipse
        transform="scale(.9535 1.0445) rotate(45)"
        cx="89.77"
        cy="-13.09"
        rx="6.116"
        ry="6.192"
        fill="#fff"
      />
      <ellipse
        transform="scale(.9535 1.0445) rotate(45)"
        cx="130.9"
        cy="-15"
        rx="6.116"
        ry="6.192"
        fill="#fff"
      />
    </FlyGroupStyled>
    <ShadowGroupStyled ry="7.971" />
  </SvgStyled>
);

export default HoverLogo;

const FlyGroupStyled = styled.g`
  x: 30;
  animation-name: logoHover;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const ShadowGroupStyled = styled.rect`
  x: 15;
  y: 160;
  width: 80px;
  height: 16px;
  fill: rgba(0, 0, 0, 0.1);
  animation-name: shadowGrow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const SvgStyled = styled.svg`
  height: 160px;
  width: 110px;

  @keyframes logoHover {
    0% {
      transform: translate(3px, 0px);
    }
    50% {
      transform: translate(0px, -15px);
    }
    100% {
      transform: translate(3px, 0px);
    }
  }

  @keyframes shadowGrow {
    0% {
      width: 80px;
      transform: translate(0px, 0px);
    }
    50% {
      width: 60px;
      transform: translate(10px, 0px);
    }
    100% {
      width: 80px;
      transform: translate(0px, 0px);
    }
  }
`;
