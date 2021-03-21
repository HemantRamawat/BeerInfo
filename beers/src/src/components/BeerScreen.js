import React from 'react';
import DataNew from './DataNew';

function BeerScreen(props) {
    console.log(props.match.params.id);
    const beer = DataNew.products.filter(x => x.id == props.match.params.id )
    console.log(beer[0].name)

    return <div>
        <div>
        <div className="productDetailflex">
 <div className="productDetailbox">
        <div className="productDetailname">{beer[0].name}</div>
 <img className="productDetailImage" src={beer[0].image_url} alt="image available" />
 <div className="productDetailtagline">"{beer[0].tagline}"</div>
  <div className="productDetailABVHeading">ABV</div>
 <div className="productDetailabv">{beer[0].abv}</div>
 <div className="productDetailIBUHeading">IBU</div>
 <div className="productDetailibu">{beer[0].ibu}</div>
 <div className="productDetailEBCHeading">EBC</div>
 <div className="productDetailebc">{beer[0].ebc}</div>
 <div className="productDetailINGREDIENTSHeading">INGREDIENTS</div>
 <div className="productDetailingredients">
 <table class="center">
  <tr>
    <th>Name</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>{beer[0].ingredients.malt[0].name}</td>
    <td>
        {beer[0].ingredients.malt[0].amount.value}_
        {beer[0].ingredients.malt[0].amount.unit}
    </td>
  </tr>
  <tr>
    <td>{beer[0].ingredients.malt[1].name}</td>
    <td>
        {beer[0].ingredients.malt[1].amount.value}_
        {beer[0].ingredients.malt[1].amount.unit}
    </td>
  </tr>
  <tr>
    {/* <td>{beer[0].ingredients.malt[2].name}</td>
    <td>
        {beer[0].ingredients.malt[2].amount.value}_
        {beer[0].ingredients.malt[2].amount.unit}
    </td> */}
  </tr>
</table>
</div>

 <div className="productDetailHeadingDESC">Description</div>
 <div className="productDetaildescription">{beer[0].description}</div>
<div className="productDetailHeadingFP">Food Pairing</div>
<div className="productDetailFoodPairing" >
<table class="center">

  <tr>
    <td>{beer[0].food_pairing[0]}</td>
  </tr>
  <tr>
    <td>{beer[0].food_pairing[1]}</td>
  </tr>
  <tr>
    <td>{beer[0].food_pairing[2]}</td>
  </tr>
</table>
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
}

export default BeerScreen;