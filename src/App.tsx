import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import HomePage from "./components/views/HomePage/HomePage";
import OrderPage from "./components/views/OrderPage/OrderPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
