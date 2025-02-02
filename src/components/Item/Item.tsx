import React from "react";
import style from "./Item.module.css"
function Item(props: any) {
    return (
        <div className={'item'}>
            <img src={"./assets/" + props.item.img} alt="image"/>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <b>{props.item.price} $</b>
            <div className={'add-to-cart'}>+</div>
        </div>
    )
}
export default Item;