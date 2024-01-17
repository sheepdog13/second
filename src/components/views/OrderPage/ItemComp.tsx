import React, { useState } from "react";
import { item } from "../../../types/item";
import { useAppDispatch } from "../../../redux/hooks";
import { decrase, increase } from "../../../_reducers/order";

interface ItemProps {
  item: item;
}

function ItemComp({ item }: ItemProps) {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
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
    </>
  );
}

export default ItemComp;
