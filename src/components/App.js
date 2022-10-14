import {React, useState} from "react";
import './App.css';
import Header from "./Header/header";
import Body from "./Body/body";
import Footer from "./Footer/footer";
import Cart from "./Cart/cart";
import useVideos from "../hooks/useItems";




const App = () => {
    const [sneaker, search]=useVideos('');
    const [show, setShow]= useState(true);
    const[cart, setCart]=useState([]);

    const handleCart = (item) =>{
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    }

    const handleChange = (item, d)=> {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;

      if (arr[ind].amount === 0) arr[ind].amount =1;
      setCart([...arr]);   };


    return (
        <>
         <div className="bodyBackground">
         <Header 
         setShow={setShow} />
         {show? ( <Body
           size={cart.length}
           handleCart={handleCart}
           setShow={setShow}
           sneaker={sneaker}
           search={search} />)
            :
            ( <Cart
             cart={cart} 
             setCart={setCart}
              handleChange={handleChange}/>)}
        
         <Footer />
        </div>
        </>
          
        

    )
}

export default App;