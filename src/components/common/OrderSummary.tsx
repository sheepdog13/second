import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 350px;
  height: 170px;
  padding: 27px;
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const Sum = styled.div`
  text-align: right;
  font-size: 18px;
  line-height: 21.78px;
`;

const OrderBtn = styled.button<{ $isActive: boolean }>`
  width: 301px;
  height: 47.92px;
  margin-top: 20px;
  background-color: ${(props) => props.color};
  font-size: 18px;
  line-height: 21.78px;
  color: #fff;
  cursor: ${(props) => (props.$isActive ? "pointer" : "auto")};
`;

function OrderSummary() {
  const navigate = useNavigate();
  const sum = useAppSelector((state) => state.order.counter);
  const price = useAppSelector((state) => state.order.price);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(sum > 0);
  }, [sum]);

  const addCommas = (price: number) => {
    const commaprice = price.toLocaleString("ko-KR");
    return commaprice;
  };

  const order = () => {
    navigate("/complete");
  };

  return (
    <Wrapper>
      <Sum>총 수량 : {sum}개</Sum>
      <Sum>총 가격 : {addCommas(price)}원</Sum>
      <OrderBtn
        onClick={order}
        disabled={!isActive}
        color={sum <= 0 ? "#c1c1c1" : "#000000"}
        $isActive={isActive}
      >
        주문하기
      </OrderBtn>
    </Wrapper>
  );
}

export default OrderSummary;
