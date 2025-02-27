import React from "react";
import {Product} from "../Models/Product";
import { FaRegTrashCan } from "react-icons/fa6";

//props: { items: any[]; onAdd: (item: any) => void}
function Order(props: {item: Product; onDelete: (item: number) => void}) {

    return(<div className={'item'}>
        <img src={"./assets/" + props.item.img} alt="image"/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price} $</b>
        {// @ts-ignore
            <FaRegTrashCan className={'delete-icon'} onClick={()=> props.onDelete(props.item.id)}/>}
    </div>)
}

export default Order;