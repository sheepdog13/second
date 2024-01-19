import React, { useEffect } from "react";
import { asynsGetFetch } from "../../../_reducers/item";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ItemComp from "./ItemComp";
import styled from "styled-components";
import Header from "../../common/Header";
import OrderSummary from "../../common/OrderSummary";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingDesc = styled.div`
  margin-top: 363px;
  font-size: 18px;
  line-height: 21.78px;
  text-align: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  margin-top: 52px;
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

  return (
    <Wapper>
      <Header />
      {isload === "succeeded" ? (
        <>
          <ItemWrapper>
            {items.map((item, index) => (
              <ItemComp key={index} item={item} />
            ))}
          </ItemWrapper>
        </>
      ) : (
        <LoadingDesc>
          목록을
          <br /> 불러오고 있습니다.
        </LoadingDesc>
      )}
      <OrderSummary />
    </Wapper>
  );
}

export default OrderPage;
