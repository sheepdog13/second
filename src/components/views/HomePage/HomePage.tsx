import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

const Logo = styled.img`
  width: 150px;
  height: 51px;
  margin-top: 310px;
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
  const navigate = useNavigate();
  return (
    <Wapper>
      <Logo src={`${process.env.PUBLIC_URL}/img/logo-black.png`} alt="logo" />
      <Btn
        onClick={() => {
          navigate("/order");
        }}
      >
        주문하러 가기
      </Btn>
    </Wapper>
  );
}

export default HomePage;
