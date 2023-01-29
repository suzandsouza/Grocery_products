import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/Signup";


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddEvent from "./Components/AddProduct"
import Orders from "./Components/Orders";

import 'rsuite/dist/rsuite.min.css';
import AddProduct from "./Components/AddProduct";


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/address" element={<Address />}/>   
          <Route 
            path="/payment"
            element={
              <Elements><Payment /></Elements>
            }
          />
          <Route path="/addproducts" element={<AddProduct />}/>
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;