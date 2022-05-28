import React from 'react'

export default function Product(props) {

    const {product, onAdd} = props; 

  return (
    <div>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.title}{product.categoryName}</h3>
        <div>{product.price} TL</div>
        <div>
            <div className="about-text">{product.about}</div>
            <button onClick={() => onAdd(product)}>Sepete Ekle</button>
        </div>
    </div>
  )
}
