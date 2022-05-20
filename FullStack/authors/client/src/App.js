import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
// import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path = "/">
          <hr></hr>
          <AllAuthors></AllAuthors>
        </Route>
        <Route exact path = "/new">
          <NewAuthorForm></NewAuthorForm>
        </Route>
        <Route exact path = "/edit/:id">
          <EditAuthor></EditAuthor>
        </Route>        
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;