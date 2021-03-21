import React from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
export default class ABV16to20 extends React.Component {
  state = {
    loading: true,
    beer: null
  };
  state = {
    visible: true
  };



 

  async componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers?abv_gt=6&abv_lt=10";
    const response = await fetch(url);
    const data = await response.json();
    data.sort((a,b) => a.abv - b.abv);
    this.setState({ beers: data , loading: false});
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.beers) {
      return <div>didn't get a beer</div>;
    }
    return (
      <div> 
      <div className="bannerline">
             <h1> ABV = 6-10 </h1>
             <h1> Beers !</h1>
           </div> 
             <div className="BEERS">
        {this.state.beers.map(beer => (
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
    <div className="Heading">Food Pairing</div>
    
    <div className="FoodPairing">{beer.food_pairing[0]}</div>
    <div className="FoodPairing">{beer.food_pairing[1]}</div>
    <div className="FoodPairing">{beer.food_pairing[2]}</div>
            
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




