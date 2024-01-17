import React, { useEffect } from "react";
import { asynsGetFetch } from "../../../_reducers/item";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ItemComp from "./ItemComp";
import styled from "styled-components";

const FixedBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: #000;
  color: #fff;
`;

function OrderPage() {
  const dispatch = useAppDispatch();
  // items get 요청
  useEffect(() => {
    dispatch(asynsGetFetch());
  }, []);
  // state 가져오기
  const items = useAppSelector((state) => state.item.data);
  const isload = useAppSelector((state) => state.item.loading);
  const sum = useAppSelector((state) => state.order.counter);
  const price = useAppSelector((state) => state.order.price);

  if (isload === "pending") {
    // 로딩 중 상태일 때의 랜더링
    return <div>Loading...</div>;
  }

  if (isload === "succeeded") {
    // 데이터가 도착했을 때의 랜더링
    return (
      <>
        <FixedBox>
          <div>총 수량 :{sum}</div>
          <div>총 가격 :{price}</div>
        </FixedBox>
        <div>
          {items.map((item, index) => (
            <ItemComp key={index} item={item} />
          ))}
        </div>
      </>
    );
  }
  return <div>Error occurred</div>;
}

export default OrderPage;
