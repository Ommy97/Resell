import React, { useState } from "react";
import SearchBar from "../Searchbar/searchbar";
import Navbar from "../Navbar/navbar";
import './body.css';


const Body = ({sneaker, search, setShow, handleCart, size}) => {
  const [isHidden, setIsHidden]= useState(true);


    const onClickCategory = (state) => {
      setIsHidden(state)
    }
    const Filter = (term) => {
      search(term)
    }    
  

    return(
      <div className="background">
        <Navbar
        cart={size}
        setShow={setShow}
        filter={Filter}
      onClickCategory={onClickCategory}
      item1='Shop'
      item2='Jordan'
      item3='Nike'
      item4='Adidas'
      item5='Assistenza'/>
      <div className="ui container">
        {isHidden && <div><h1 className="centered">Buy Authentic sneakers</h1>
      <SearchBar onFormSubmit={search}/> </div>}
      <div className="ui hidden divider"></div>
        <div className="ui four doubling cards"> 
          {sneaker.map((item, id) =>(   
                <div key={id} className="card">
                <div className="image">
                <img src={item.img} alt='scarpa'/>
               </div>
               <div className="content">
                <div className="meta">{item.brand}</div>
                <div className="meta">{item.name}</div>
              </div>
              <div className="extra content">
              <p style={{display:"inline"}}>{item.price} €</p>
              <div onClick={()=> handleCart(item)} className="ui vertical animated red button" style={{float:'right'}} tabindex="0">
              <div className="hidden content">Buy</div>
              <div className="visible content">
             <i className="shop icon"></i>
             </div>
             </div>
              </div>
              </div>))}
        </div>
        </div>
        </div>
    )
   
};

export default Body;