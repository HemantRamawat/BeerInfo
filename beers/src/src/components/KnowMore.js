import React from "react";
import RandomBeer from "./RandomBeer";
import {Link} from 'react-router-dom';



export default class beerCollection extends React.Component {
  state = {
    loading: true,
    beers: null,
    
  };



  async componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=40";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beers: data , loading: false});
    console.log(data);
  }



  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    


      
        
        
        


return (
  <div> 
  <div className="bannerline">
         <h1> This is Our </h1>
         <h1> Beer Collection !</h1>
       </div> 
         <div className="BEERS">
    {this.state.beers.map(beer => (
      <div>
        <div className="flex">
 <div className="box">
        <div className="name">{beer.name}</div>
 <img src={beer.image_url} alt="image available" />
 <div className="tagline">"{beer.tagline}"</div>
 <div className="Heading">ABV</div>
 <div className="abv">{beer.abv}</div>
 <div className="Heading">Description</div>
 <div className="description">{beer.description}</div>
<div className="Heading">Food Pairing</div>

<div className="FoodPairing">{beer.food_pairing[0]}</div>
<div className="FoodPairing">{beer.food_pairing[1]}</div>
<div className="FoodPairing">{beer.food_pairing[2]}</div>
        
      </div>
       </div>
       </div>
      ))}
 
  </div>
  
  
  </div>
);
}
}
