import React, { useState } from "react";
import './searchbar.css'


const SearchBar = ({onFormSubmit})=> {
    const [term, setTerm]=useState('');

   const onInputChange =(event)=> {
        setTerm(event.target.value);
      };
  
const onSubmit = event =>{
          event.preventDefault()
           onFormSubmit(term)
      };

      return(<>
            <div className="margin">
             <div className="ui two column centered grid ">
           <form  onSubmit={onSubmit} className='ui form'>
            <div className="ui big icon input">
                <input
                className="input"
                 type="text" 
                 value={term}
                 onChange={onInputChange}
                 />
                 <i className="search icon"></i>
                 </div>
           </form> 
           </div>
           </div>
           </>
    )
};

export default SearchBar;