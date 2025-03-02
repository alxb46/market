import React from "react";
import {Product} from "../../Models/Product";

function ProductInfo(props: { productInfo: Product; onAdd: (item: Product) => void; onProductInfo: (product: Product)=> void}) {
    return (
        <div className={'full-item'}>
            <div>
                <img src={"./assets/" + props.productInfo.img} alt="image" onClick={() => props.onProductInfo(props.productInfo)}/>
                <h2>{props.productInfo.title}</h2>
                <p>{props.productInfo.description}</p>
                <b>{props.productInfo.price} $</b>
                <div className={'add-to-cart'} onClick={() => props.onAdd(props.productInfo)}>+</div>
            </div>

        </div>
    );
}

export default ProductInfo;