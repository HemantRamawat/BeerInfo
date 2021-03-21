import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    BrowserRouter
  } from 'react-router-dom';

import FetchData from "./FetchData";
import RandomBeer from "./RandomBeer";
import BeerCollection from './BeerCollection';
import ABV0to5 from './ABV0to5';
import ABV6to10 from './ABV6to10';
import ABV11to15 from './ABV11to15';
import ABV16to20 from './ABV16to20';
import KnowMore from './KnowMore';
import BeerScreen from "./BeerScreen";

class App extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
          
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems,{});
          });
          
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
          });
        
    }

  render() {
    return (
      <div>
         <div className="navbar-fixed">
         <nav>
    <div className="nav-wrapper #000000 black">
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <Link to='/FetchData' className="brand-logo" >BeerS</Link>
      <ul className="right hide-on-med-and-down">
        <div className="links">
        <li><Link to='/FetchData'>HOME</Link></li>
        <li><Link to="/RandomBeer">RANDOM-BEER</Link></li>
        
        <ul id="dropdown1" class="dropdown-content">
          <li><Link to="/ABV0to5">0-5</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV6to10">6-10</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV11to15">11-15</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV16to20">16-20</Link></li>
        </ul>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">ABV<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><Link to="/BeerCollection">BEER-COLLECTION</Link></li>
  
        </div>
      </ul>
    </div>
    
  </nav>
  </div>

  
  <ul className="sidenav" id="mobile-demo">
     <div className="links">
        <li><Link to='/FetchData'>HOME</Link></li>
        <li><Link to="/RandomBeer">RANDOM-BEER</Link></li>
        
        <ul id="dropdown2" class="dropdown-content">
          <li><Link to="/ABV0to5">0-5</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV6to10">6-10</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV11to15">11-15</Link></li>
          <li class="divider"></li>
          <li><Link to="/ABV16to20">16-20</Link></li>
        </ul>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">ABV<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><Link to="/BeerCollection">BEER-COLLECTION</Link></li>
  
        </div>
  </ul>
     
        <Switch> 
      
       <Route path='/FetchData' component={FetchData} />
       <Route path='/RandomBeer' component={RandomBeer}     />
       <Route path='/ABV0to5' component={ABV0to5}     />
       <Route path='/ABV6to10' component={ABV6to10}     />
       <Route path='/ABV11to15' component={ABV11to15}     />
       <Route path='/ABV16to20' component={ABV16to20}     />
       <Route path='/BeerCollection' component={BeerCollection}     />
       <Route path='/KnowMore' component={KnowMore}     />
       <Route path="/BeerScreen/:id" component={BeerScreen} />

     </Switch>
     </div>
      
      
    );
  }
}

export default App;
