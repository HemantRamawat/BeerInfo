import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends Component{
  constructor()
  {
    super()
    this.state={
      searchData:null,
      noData:false,
    }
  }
  search(key){
    console.warn(key)
    fetch("https://api.punkapi.com/v2/beers?beer_name=" + key).then((data)=>{
    data.json().then((resp)=>{
      console.warn("resp",resp)
      if(resp.length>0){
        this.setState({searchData:resp,noData:false})

      }
      else{
        this.setState({noData:true,searchData:null})
      }
     
    })
    })
  }
  render(){
    return(
          <div>
            <div className="searchbeer">
            <h1>SEARCH YOUR BEER </h1>
            </div>
            <form action="">
            <input type="search" onChange={(event)=>this.search(event.target.value)}  />
            <i class="fa fa-search"></i>
</form>
            <div>
              {
                this.state.searchData?
                <div>
                  {
                    this.state.searchData.map(item=>
                    <div>
                        <div className="flex">
                        <div className="box">
                        <div className="name">{item.name}</div>
                      <img src={item.image_url} alt="image available" />
                      <div className="tagline">"{item.tagline}"</div>
                      <div className="Heading">ABV</div>
                      <div className="abv">{item.abv}</div>
                      <div className="Heading">Description</div>
                      <div className="description">{item.description}</div>
                      <div className="Heading">Food Pairing</div>

                      <div className="FoodPairing">{item.food_pairing[0]}</div>
                      <div className="FoodPairing">{item.food_pairing[1]}</div>
                      <div className="FoodPairing">{item.food_pairing[2]}</div>
                      </div>
                      </div>
                      </div>)
                  }
              
            </div>
            :""

                }
                <div class="search-bar-nobeer">
                { 
                this.state.noData?<p>No Beer Found</p>:null
                
  }
  </div>
          </div>
          </div>
    );
  }
}
export default SearchBar;
