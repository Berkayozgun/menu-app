import React from "react";

export default function Header(props) {
    const {countCartItems} = props;
    return(
        <div>
            <header className="main-header">
                <div>
                    <a href='#/' style={{textDecoration: "none"}}>
                        <h1>
                            <center>Restoranımıza hoş geldiniz!</center>
                        </h1>
                    </a>
                </div>
                <div className="header-cart">
                    <a href='#/cart'>Sepet {' '}
                    {countCartItems? (
                        <button className="badge">{countCartItems}</button>
                    ): (
                        ''
                    )}
                    
                    </a>{' '}
                </div>
            </header>
        </div>
    )
}