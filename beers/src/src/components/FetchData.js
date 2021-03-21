import React from "react";
import RandomBeer from "./RandomBeer";
import FilteredBeers from "./ABV16to20";
import SearchBar from "./SearchBar";
import KnowMore from "./KnowMore";
import Data from "../components/Data";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import BeerScreen from "./BeerScreen";


export default class FetchData extends React.Component {
  state = {
    loading: true,
    beers: null,
    
  };



  async componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=40";
    const response = await fetch(url);
    const data = await response.json();
    data.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({ beers: data , loading: false});
    
    console.log(data);
  }

  

  

  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }

  render() {


      
        
        
        


return (
  <div>
  <header>
 <section id="Main-image">
 </section>
   <div class="Main-marketing-text">
       
       <h1 className="great">Great Taste </h1> 
       <h1 className="for"><span>For</span></h1>
        <h1 className="moments">Great Moments.. <span role="img" aria-label="sheep">🍻</span></h1>      
       
   </div>
 
  </header>
  <SearchBar />

  
  
  
  <div className="bannerline">
         <h1> Check Out Our </h1>
         <h1> Beers !</h1>
       </div> 
         <div className="BEERS">
          {Data.products.map(beer => (
        <div>
        <div className="flex">
 <div className="box">
        <div className="name"><Link to={'/BeerScreen/' + beer.id}>{beer.name}</Link></div>
        <Link to={'/BeerScreen/' + beer.id}>
 <img src={beer.image_url} alt="image available" />
 </Link>
 <div className="tagline">"{beer.tagline}"</div>
 <div className="Heading">ABV</div>
 <div className="abv">{beer.abv}</div>
 <div className="Heading">Description</div>
 <div className="description">{beer.description}</div>
 


{/* 
<div className="Heading">Food Pairing</div>

<div className="FoodPairing">{beer.food_pairing[0]}</div>
<div className="FoodPairing">{beer.food_pairing[1]}</div>
<div className="FoodPairing">{beer.food_pairing[2]}</div> */}
        
      </div>
       </div>
       </div>
      ))}
 
  </div>
  
  
<div className="Footer">
<footer class="page-footer #000000 black">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">OUR CONTACTS</h5>
                <p class="grey-text text-lighten-4"></p>
                <p>1234567890</p>
                <p>info@yoursite.com</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Shop</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          
        </footer>
        </div>

       
  
  </div>
);
}
}
