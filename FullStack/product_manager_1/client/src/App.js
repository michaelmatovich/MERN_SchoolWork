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
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
