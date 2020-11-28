import React from 'react';
import logo from './shopping-cart-solid.svg'

function Checkout(props) {
   const counter = props.products.filter(
       (item) => {
           return item.bought;
       }
   )
    return (
        <div className='checkout'>
            <a href={"#/checkout"}>
         <img src={logo} alt='logotype'/>
         <span className='counter'>
             {counter.length}
         </span>
            </a>
        </div>
    );
}

export default Checkout;