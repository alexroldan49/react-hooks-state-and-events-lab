import React from "react";
import { useState } from "react"

function Item({ name, category }) {

  const [cName, setCName] = useState(false)
  
function clickHandler (){
  setCName(!cName)
}

  return (
    <li className={ cName ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>{clickHandler()}} className={ cName ? "remove" : "add" }>{ cName ? "Remove From Cart" : "Add To Cart" }</button>
    </li>
  );
}

export default Item;
