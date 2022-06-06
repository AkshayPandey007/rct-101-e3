import React from "react";
import { useState , useEffect } from "react";
import axios from "axios"
import Product from "./Product/Product";

const Products = () => {
  const[lists,setLists]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/products")
   
    .then((d)=>{
      setLists(d)
      console.log(d)
  })
  },[])
  return (<div>
  {lists.map((list)=>(
    <Product/>
  ))}
</div>
  )
};

export default Products;
