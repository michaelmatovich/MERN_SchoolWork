import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Products</h1>
      <Switch>
        <Route exact path = "/">
          <NewProductForm></NewProductForm>
          <hr></hr>
          <AllProducts></AllProducts>
        </Route>
        <Route exact path = "/products/:id/edit">
          <EditProduct></EditProduct>
        </Route>
        
        <Route exact path = "/products/:id">
          <OneProduct></OneProduct>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
