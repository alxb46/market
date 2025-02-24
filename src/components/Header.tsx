import React from "react";
import {FaBasketShopping} from "react-icons/fa6";


function Header() {

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
                        <div className={'shop-cart'}></div>
                    )
                }
            </div>
            <div className={'presentation'}></div>
        </header>
    );
}

export default Header;
