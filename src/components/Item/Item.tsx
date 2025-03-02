import React from "react";
import style from "./Item.module.css"
import {Product} from "../../Models/Product";
function Item(props: { item: Product; onAdd: (item: Product) => void; onProductInfo: (product: Product)=> void}) {
    return (
        <div className={'item'}>
            <img src={"./assets/" + props.item.img} alt="image" onClick={()=> props.onProductInfo(props.item)} />
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <b>{props.item.price} $</b>
            <div className={'add-to-cart'} onClick={()=> props.onAdd(props.item)}>+</div>
        </div>
    )
}
export default Item;