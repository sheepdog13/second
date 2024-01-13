import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

function HomePage() {
  return <Wapper>home</Wapper>;
}

export default HomePage;
