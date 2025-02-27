import React from "react";
import {FaBasketShopping} from "react-icons/fa6";
import {Product} from "../Models/Product";
import Order from "./Order";


const showOrders = (props: { orders: Product[] } ) => {
    return (<>
        {props.orders.map((order, index) => (
            <Order key={order.id} item={order}></Order>
        ))}
    </>)
}
const showNothing = () => {
  return(
      <div className={'empty'}>
        <h2>Bag is empty</h2>
      </div>
  )
}

function Header(props: { orders: Product[] }) {

    let [cartOpen, setCartOpen] = React.useState(false);

    function onClickHandler() {
        setCartOpen(cartOpen =!cartOpen);
    }
    // @ts-ignore
    return (
        <header>
            <div>
                <span className={'logo'}>House staff</span>
                <ul className={'nav'}>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                    <li>{// @ts-ignore
                        <FaBasketShopping onClick={onClickHandler}  className={`shop-cart-button ${cartOpen && 'active'}`}/>
                    }</li>
                </ul>

                {
                    cartOpen && (
                        <div className={'shop-cart'}>
                            {
                                props.orders.length > 0 ? showOrders(props) : showNothing()
                            }


                        </div>
                    )
                }
            </div>
            <div className={'presentation'}></div>
        </header>
    );
}

export default Header;
