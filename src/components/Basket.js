import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function Basket(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 2,
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#F62F63",
        darker: "#053e85",
      },
    },
  });

  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.99;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <div className="basket-body">
      <h2>
        <center>Sepetiniz</center>
      </h2>
      <div>
        {cartItems.length === 0 && (
          <div>Sepetinize henüz ekleme yapmadınız.</div>
        )}
      </div>
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
          <div className="col-2">
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

          <div>
            <div className="row">
              <strong>Toplam Tutar</strong>
            </div>
            <div className="col-1">{totalPrice.toFixed(2)} TL</div>
          </div>

          
        <TextField
          label="İsminiz"
          id="outlined-size-small"
          size="small"
          sx={{ marginTop:"1rem" }}
          type="string"
        />
      
        <TextField
          label="E-mail"
          id="outlined-size-small"
          size="small"
          sx={{ marginTop:"1rem" }}
          type="email"
        />
      
      <TextField
          label="Telefon"
          id="outlined-size-small"
          size="small"
          sx={{ marginTop:"1rem" }}
          type="tel"
        />
          <TextField
          label="Adresiniz"
          id="outlined-size-small"
          size="small"
          sx={{ marginTop:"1rem" }}
          type="address"
        />

          <Box sx={{ width:"11rem", height:"5rem",marginTop:"1rem"}}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Ödeme Yöntemi</InputLabel>
              <Select
              sx={{ height:"3rem"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Nakit</MenuItem>
                <MenuItem value={20}>Kredi/Banka Kartı</MenuItem>
                <MenuItem value={30}>Yemek Kartı</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div className="row">
            <Button
            sx={{ width:"11rem", height:"2.5rem"}}
              theme={theme}
              color="primary"
              variant="contained"
              onClick={() => {
                {
                  setOpen(true);
                }
                window.location.href = "/";
              }}
            >
              Siparişi tamamla
            </Button>
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
    </div>
  );
}
