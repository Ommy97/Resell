import React from "react";
import './footer.css';


const Footer = ()=>{
 return(
    <footer className="footerMain">
      <div className="ui three column grid">
  <div className="centered column">
  <div class="ui list">
  <div class="item">
  <i class="large certificate icon"></i>
    <div class="content">
      <h4>Guaranteed 100% authentic</h4>
      <div class="description">We only accept items that are 100% authentic. All items must first be checked carefully.</div>
    </div>
  </div>
  <div class="item">
  <i class="large box icon"></i>
    <div class="content">
      <h4>We ship with Postnl, UPS and DHL Express</h4>
      <div class="description">All orders will be shipped with Express, including On Demand Delivery service.</div>
    </div>
  </div>
  <div class="item">
    <i class="large undo alternate icon"></i>
    <div class="content">
      <h4>Free returns, 14-day cooling-off period</h4>
      <div class="description">You may return your purchases free of charge within 14 days of receipt</div>
    </div>
    </div>
    </div>
    </div>
    <div className="centered column">
      <div className="payment">
         <h3>Payment method</h3>
         <div className="ui horizontal list">
  <div className="item">
    <img className="ui mini image" src="https://restocks.net/img/pay/mastercard.svg"/>
    </div>
  <div className="item">
    <img className="ui mini image" src="https://restocks.net/img/pay/visa.svg"/>
  </div>
  <div className="item">
    <img src="https://restocks.net/img/pay/paypal-1.svg" className="ui mini image"/>
</div>
    </div>
    </div>
    </div>
    <div className="centered column">
    <div className="payment">
         <h3>Our logistic partners</h3>
         <div className="ui horizontal list">
  <div className="item">
    <img className="ui mini image" src="https://restocks.net/img/couriers/ups.png"/>
    </div>
  <div className="item">
    <img className="ui mini image" src="https://restocks.net/img/couriers/postnl.png"/>
  </div>
  <div className="item">
    <img src="https://restocks.net/img/couriers/dhl.png" className="ui mini image"/>
</div>
    </div>
    </div>
    </div>
    </div>
    </footer>
 )   
};

export default Footer;