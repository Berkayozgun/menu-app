import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.99;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <aside className="block col-1 ">
      <h2>Sepetiniz</h2>
      <div>{cartItems.length === 0 && <div>Sepetinize henüz ekleme yapmadınız.</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} adet {item.title} {item.price.toFixed(2)} TL
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div>
          <hr></hr>
          <div className="row">
            <div className="col-2">Sepet Tutarı</div>
            <div className="col-1">{itemsPrice.toFixed(2)} TL</div>
          </div>

          <div className="row">
            <div className="col-2">Teslimat Ücreti</div>
            <div className="col-1">{shippingPrice.toFixed(2)} TL</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Toplam Tutar</strong>
            </div>
            <div className="col-1">{totalPrice.toFixed(2)} TL</div>
          </div>

          <input
            type="text"
            className="user-name"
            placeholder="Adınız"
            name="from_name"
            required
          ></input>
          <input
            type="email"
            className="user-email"
            placeholder="E-mail"
            name="from_email"
            required
          ></input>
          <input
            type="phone"
            className="user-phone"
            placeholder="Telefon"
            required
          ></input>
          <input
            type="text"
            className="ad-soyad"
            placeholder="Adresiniz"
          ></input>

          <select name="cars" id="cars">
            <option value="Ödeme yöntemi">Ödeme Yöntemi</option>
            <option value="mercedes">Pos cihazı</option>
            <option value="audi">Nakit</option>
          </select>

          <div className="row">
            <button className="button checkout"
              onClick={() => {
                alert("Siparişiniz için teşekkürler!");
                window.location.href = "/";
              }}
            >
              Siparişi tamamla
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
