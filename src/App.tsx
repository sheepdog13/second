import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import HomePage from "./components/views/HomePage/HomePage";
import OrderPage from "./components/views/OrderPage/OrderPage";
import CompletePage from "./components/views/CompletePage/CompletePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </>
  );
}

export default App;
