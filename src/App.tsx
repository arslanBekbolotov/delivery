import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import AdminDishes from "./containers/adminDishes/adminDishes";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";
import AdminOrders from "./containers/adminOrders/adminOrders";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/dishes" element={<AdminDishes />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/addDish" element={<AddDish />} />
            <Route path="/admin/edit/:id" element={<EditDish />} />
          </Routes>
        </Layout>
      </div>
    </ChakraProvider>
  );
}

export default App;
