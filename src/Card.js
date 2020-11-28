import React from 'react';
import Button from "./Button";

function Card(props) {

    return (
        <div className='card'>
            <div className="card-image">
                <img src={props.product.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div className="card-rating">{props.product.rating}</div>
                <div className="card-price">{props.product.price} ₽</div>
                <Button bought={props.product.bought}
                        setBought={props.setBought}
                        id={props.product.id}/>
            </div>
        </div>
    );
}

export default Card;