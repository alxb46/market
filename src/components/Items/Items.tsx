import React from "react";
import Item from "../Item/Item";

function Items(props: { items: any[]; }) {
    return(
        <main>
            {props.items.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))}
        </main>

    )
}
export default Items;