import React from "react";
import {Product} from "../Models/Product";

function Order(props: {item: Product}) {
    return(<div className={'item'}>
        <img src={"./assets/" + props.item.img} alt="image"/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price} $</b>
    </div>)
}

export default Order;