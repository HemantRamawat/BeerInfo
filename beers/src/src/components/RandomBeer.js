import React from "react";

export default class RandomBeer extends React.Component {
  state = {
    loading: true,
    beer: null
  };
  state = {
    visible: true
  };



 

  async componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beer: data , loading: false});
    // this.setState({ person1: data[1] , loading: false});
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.beer) {
      return <div>didn't get a beer</div>;
    }
    return (
      <div>

<div className="bannerline">
        <h1>Random Beer</h1>
        <h1> Suggestion For U</h1>
        
      </div>
 
<div className="Randombeer">
      
        
        
        
          <div className="Randombeerflex">
          <div className="Randombeerbox">
          <div className="Randombeerbeer">
        <div className="name">{this.state.beer[0].name}</div>
        <img src={this.state.beer[0].image_url} alt="image not available on API" />

        <div className="tagline">"{this.state.beer[0].tagline}"</div>
        <div className="Heading">ABV</div>
        <div className="abv">{this.state.beer[0].abv}</div>
        <div className="Heading">Description</div>
        <div className="description1">{this.state.beer[0].description}</div>
        <div className="Heading">Food Pairing</div>
        
        <div className="FoodPairing">{this.state.beer[0].food_pairing[0]}</div>
        <div className="FoodPairing">{this.state.beer[0].food_pairing[1]}</div>
        <div className="FoodPairing">{this.state.beer[0].food_pairing[2]}</div>
        

        </div>
        </div>
        

        
        </div>

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




