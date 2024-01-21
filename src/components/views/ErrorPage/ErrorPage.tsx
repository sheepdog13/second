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

const Desc = styled.div`
  font-size: 18px;
  line-height: 21.78px;
  text-align: center;
  margin-top: 12px;
`;

function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // 3초 뒤에 '/'로 라우팅
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <Wapper>
      <Desc>페이지를 찾을 수 없습니다</Desc>
    </Wapper>
  );
}

export default ErrorPage;
