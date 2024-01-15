import React, { useEffect } from "react";
import { asynsGetFetch } from "../../../_reducers/item";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

function OrderPage() {
  const dispatch = useAppDispatch();
  // items get 요청
  useEffect(() => {
    dispatch(asynsGetFetch());
  }, []);
  // state 가져오기
  const items = useAppSelector((state) => state.item.data);
  const isload = useAppSelector((state) => state.item.loading);

  if (isload === "pending") {
    // 로딩 중 상태일 때의 랜더링
    return <div>Loading...</div>;
  }

  if (isload === "succeeded") {
    // 데이터가 도착했을 때의 랜더링
    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    );
  }
  return <div>Error occurred</div>;
}

export default OrderPage;
