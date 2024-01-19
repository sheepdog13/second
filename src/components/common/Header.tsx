import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  height: 57px;
  position: fixed;
  background-color: #000;
`;

const Logo = styled.img`
  width: 94.12px;
  height: 32px;
  margin: 12px;
`;

function Header() {
  return (
    <Wrapper>
      <Logo src={`${process.env.PUBLIC_URL}/img/logo-black.png`} alt="logo" />
    </Wrapper>
  );
}

export default Header;
