import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <br></br>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
