import {useState, useEffect} from 'react';
import axios from 'axios';

const useVideos = (defaultSearchTerm)=> {
    const [sneaker, setSneaker]= useState ([]);

    useEffect(()=> {
        search(defaultSearchTerm)
       }, [defaultSearchTerm])

       const search = async (term)=>{
        const response = await axios.get('http://localhost:3001/sneakers',{
         params:{
          q:term
         }
         })
    
         setSneaker(response.data);
       
      }
    
      return [sneaker, search];
}

export default useVideos;