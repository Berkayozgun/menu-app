import React from "react";
import Product from "./Product";


export default function Main(props) {

    const {anayemekler,data,atistirmaliklar,burgerler,caylar,espressolar,filtrekahveler,kahvaltiliklar,
        kokteyller,makarnalar,menu,mesrubatlar,salatalar,sandvicler,sicakicecekler,sogukkahveler,tatlilar,turkkahveleri,onAdd} = props;
    

    return(
        <div className="main-container">

            <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {turkkahveleri.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

            <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {tatlilar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>
        
        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {sogukkahveler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {sicakicecekler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

            <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {sandvicler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>
        
        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {salatalar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {mesrubatlar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {makarnalar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>
        
        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {kokteyller.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {kahvaltiliklar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {filtrekahveler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {espressolar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>
        
        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {caylar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {burgerler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {atistirmaliklar.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {anayemekler.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>

        <main className="block col-2">
            <h2>Menü</h2>
            <div className="row">
                {menu.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
        </main>










        </div>
    )
}