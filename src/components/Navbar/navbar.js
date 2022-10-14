import  {React} from "react";
import './navbar.css'

const Navbar = (props) => {

    
    
    return (
        <div className="navbar">
            <div className="ui huge text secondary pointing menu">
               <a href="#" onClick={()=>{props.onClickCategory(true); props.filter('')}} className="item">{props.item1}</a>
               <a href="#" onClick={()=>{props.onClickCategory(false); props.filter('jordan')}} className="item">{props.item2}</a>
               <a href="#" onClick={()=>{props.onClickCategory(false);props.filter('nike')}} className="item">{props.item3}</a>
               <a href="#"  onClick={()=>{props.onClickCategory(false);props.filter('adidas')}}className="item">{props.item4}</a>
               <div className="right menu">
                <div className="ui item" onClick={()=>props.setShow(false)}>
                    <span>
                     <i className="shopping cart icon"></i>
                    </span>
                    <span>{props.cart}</span>
                </div>
               </div>
           </div>  
        </div>   )
};

export default Navbar