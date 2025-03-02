import React from "react";
import Item from "../Item/Item";
import {Product} from "../../Models/Product";

function Items(props: { items: Product[]; onAdd: (product: Product) => void; onProductInfo: (product: Product)=> void}) {
    return(
        <main>
            {props.items.map((item) => (
                <Item key={item.id} item={item} onAdd={props.onAdd} onProductInfo={props.onProductInfo}></Item>
            ))}
        </main>

    )
}
export default Items;