import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function Basket(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 2,
  };

  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.99;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <aside className="main-basket">
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
                {setOpen(true)};
                window.location.href = "/";
              }}
            >
              Siparişi tamamla
            </button>
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Siparişiniz verildi!
          </Typography>
          
        </Box>
      </Modal>
          </div>
        </div>
      )}
    
    </aside>
  );
}
