import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AdminDishes from "./containers/adminDishes/adminDishes";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";
import './App.css';

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/admin/dishes' element={<AdminDishes/>}/>
                        <Route path={'/addDish'} element={<AddDish/>}/>
                        <Route path={'/edit/:id'} element={<EditDish/>}/>
                    </Routes>
                </Layout>
            </div>
        </ChakraProvider>
    );
}

export default App;
