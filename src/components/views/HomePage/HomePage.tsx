import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Logo = styled.img`
  width: 150px;
  height: 51px;
`;

const Btn = styled.button`
  width: 172px;
  height: 88px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 25px;
  margin-top: 41px;
`;

function HomePage() {
  return (
    <Wapper>
      <Logo src={`${process.env.PUBLIC_URL}/img/logo-black.png`} alt="logo" />
      <Btn>주문하러 가기</Btn>
    </Wapper>
  );
}

export default HomePage;
