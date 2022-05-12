import './App.css';
import React, { useState } from "react";
import Search from "./components/Search"
import SearchContent from "./components/SearchContent"
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>      
      <header><h1>A Long Time Ago... In a Dojo Far Far Away...</h1></header>
      <main>
        <Search></Search>        
        
      <Switch>      
      <Route exact path = "/">
        <h1 id = "hometext"> Home </h1>
      </Route>
      <Route exact path = "/:searchField/:id">
        <SearchContent className = "searchcontent"></SearchContent>
      </Route>
      <Route exact path = "/error">
        <h1 id = "error">These aren't the droids we're looking for...</h1>
        <img src = "http://www.jasemccarty.com/blog/wp-content/uploads/2012/07/obiwan-arentthedroids.jpg"></img>

      </Route>
      </Switch>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;

