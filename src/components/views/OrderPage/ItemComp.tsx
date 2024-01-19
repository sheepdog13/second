import React, { useState } from "react";
import { item } from "../../../types/item";
import { useAppDispatch } from "../../../redux/hooks";
import { decrase, increase } from "../../../_reducers/order";
import styled from "styled-components";

interface ItemProps {
  item: item;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 301px;
  height: 80px;
  padding: 9px;
  padding-left: 12px;
  margin-bottom: 18px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

const ImgBox = styled.div`
  width: 62px;
  height: 62px;
  background: #d9d9d9;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 18px;
  line-height: normal;
  color: #000;
  gap: 8px;
`;

const Event = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 23px;
  border-radius: 10px;
  background-color: #f75a2f;
  font-size: 13px;
  color: #fff;
`;

const Content = styled.div`
  margin-left: 12px;
  flex: 1;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CounterBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 5px;
  color: #000;
  text-align: center;
  font-size: 18px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
  color: #000;
  text-align: right;
  line-height: normal;
`;

function ItemComp({ item }: ItemProps) {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState<number>(0);
  return (
    <Wrapper>
      <ImgBox />
      <Content>
        <TopBox>
          <div>{item.name}</div>
          <Event>이벤트</Event>
        </TopBox>
        <BottomBox>
          <CounterBox>
            <button
              onClick={() => {
                setCounter((prev) => prev - 1);
                dispatch(decrase(item.price));
              }}
            >
              -
            </button>
            <div>{counter}</div>
            <button
              onClick={() => {
                setCounter((prev) => prev + 1);
                dispatch(increase(item.price));
              }}
            >
              +
            </button>
          </CounterBox>
          <Price>
            <div>{item.price}원</div>
          </Price>
        </BottomBox>
      </Content>
    </Wrapper>
  );
}

export default ItemComp;
