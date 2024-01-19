import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

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

const OrderBtn = styled.button`
  width: 301px;
  height: 47.92px;
  margin-top: 20px;
  background-color: #c1c1c1;
  font-size: 18px;
  line-height: 21.78px;
  color: #fff;
`;

function OrderSummary() {
  const sum = useAppSelector((state) => state.order.counter);
  const price = useAppSelector((state) => state.order.price);
  return (
    <Wrapper>
      <Sum>총 수량 : {sum}개</Sum>
      <Sum>총 가격 : {price}원</Sum>
      <OrderBtn>주문하기</OrderBtn>
    </Wrapper>
  );
}

export default OrderSummary;
