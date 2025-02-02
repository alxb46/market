import React from "react";

function Header() {
    return (
        <header>
            <div>
                <span className={'logo'}>House staff</span>
                <ul className={'nav'}>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
            </div>
            <div className={'presentation'}></div>
        </header>
    );
}

export default Header;