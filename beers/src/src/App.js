import React , { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter,
  Redirect
} from 'react-router-dom';
import FetchData from "./components/FetchData";
import Navbar from "./components/Navbar";
import RandomBeer from "./components/RandomBeer";
// import FilteredBeers from "./components/Filtered";
import SearchBar from "./components/SearchBar"
import BeerCollection from "./components/BeerCollection";





class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        

        <BrowserRouter>
        <div>
        <Navbar />
        
        {/* <Switch> */}
        {/* <FetchData /> */}
        {/* <BeerCollection /> */}
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/FetchData" /> 
                    )
                }}
              />

        
        </div>
        </BrowserRouter>
         
      </div>
    );
  }
}

export default App;
