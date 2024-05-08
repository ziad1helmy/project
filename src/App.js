import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails"; // Corrected typo
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} /> {/* Corrected path */}
      </Routes>
    </div>
  );
}

export default App;
