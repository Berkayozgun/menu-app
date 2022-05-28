import React from 'react'

export default function Product(props) {

    const {product, onAdd} = props;

  return (
    <div className="product-card">
        <img className="small" src={product.image} alt={product.name} />
        <h5><center>{product.title}</center></h5>
        <div><center>{product.price} TL</center></div>
        <div>
            <center><button className="add-button" onClick={() => onAdd(product)}>Sepete Ekle</button></center>
            
        </div>
    </div>
  )
}
