import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckImg = styled.img`
  width: 48px;
  height: 48px;
  margin-top: 350px;
`;

const Desc = styled.div`
  font-size: 18px;
  line-height: 21.78px;
  text-align: center;
  margin-top: 12px;
`;
function CompletePage() {
  const navigate = useNavigate();
  useEffect(() => {
    // 3초 뒤에 '/'로 라우팅
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <Wapper>
      <CheckImg
        src={`${process.env.PUBLIC_URL}/img/CheckFilled.png`}
        alt="logo"
      />
      <Desc>주문이 완료되었습니다.</Desc>
    </Wapper>
  );
}

export default CompletePage;
