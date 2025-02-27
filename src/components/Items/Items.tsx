import React from "react";
import Item from "../Item/Item";

function Items(props: { items: any[]; onAdd: (item: any) => void}) {
    return(
        <main>
            {props.items.map((item) => (
                <Item key={item.id} item={item} onAdd={props.onAdd}></Item>
            ))}
        </main>

    )
}
export default Items;