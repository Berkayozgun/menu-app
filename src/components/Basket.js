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
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from '@mui/material/Divider';

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
    <Paper className="basket-body">
      <h2>
        <center>Sepetiniz</center>
      </h2>
      <div>
        {cartItems.length === 0 && (
          <div>Sepetinize henüz ekleme yapmadınız.</div>
        )}
      </div>
      {cartItems.map((item) => (
        <Paper
          elevation={10}
          sx={{ margin: "10px" , padding: "10px" }}
          key={item.id}
          className="row"
        >
          <div className="col-2">
            <div className="col-2">
             {item.title}
            </div>
          </div>
          <div>
          
            <ButtonGroup sx={{marginLeft:"50%"}} variant="outlined" aria-label="outlined button group">

              <Button onClick={() => onRemove(item)} className="remove">-</Button>
              <Button className="qty">{item.qty}</Button>
              <Button onClick={() => onAdd(item)} className="add">+</Button>

            </ButtonGroup>

          </div>
        </Paper>
        
      ))}
      {cartItems.length !== 0 && (
        <div sx={{ marginTop:"15rem"}}>
          
          <Paper sx={{ marginTop: "3rem" , marginLeft: "1rem", marginBottom:"2rem"}} elevation={0}>
          <div className="basket-row">
            <div className="col-2 sepet-text" >Sepet Tutarı</div>
            <div className="col-1 price-text">{itemsPrice.toFixed(2)} TL</div>
          </div>
          
          <Divider />
          </Paper>

          <Paper sx={{ marginTop: "2rem" , marginLeft: "1rem" ,marginBottom:"1rem"}} elevation={0}>
          <div className="basket-row">
            <div className="col-2 sepet-text" >Teslimat Ücreti</div>
            <div className="col-1 price-text">{shippingPrice.toFixed(2)} TL</div>
          </div>
          </Paper>

          <Divider />

          <Paper sx={{ marginTop: "2rem" , marginLeft: "1rem" ,marginBottom:"1rem"}} elevation={0}>
          <div className="basket-row">
            <div className="col-2 sepet-text">
              <strong>Toplam Tutar</strong>
            </div>
            <div className="col-1 price-text">{totalPrice.toFixed(2)} TL</div>
          </div>
          </Paper>

          <TextField
            label="İsminiz"
            id="outlined-size-small"
            size="small"
            sx={{ marginTop: "1rem" }}
            type="string"
          />

          <TextField
            label="E-mail"
            id="outlined-size-small"
            size="small"
            sx={{ marginTop: "1rem" }}
            type="email"
          />

          <TextField
            label="Telefon"
            id="outlined-size-small"
            size="small"
            sx={{ marginTop: "1rem" }}
            type="tel"
          />
          <TextField
            label="Adresiniz"
            id="outlined-size-small"
            size="small"
            sx={{ marginTop: "1rem" }}
            type="address"
          />

          <Box sx={{ width: "11rem", height: "5rem", marginTop: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Ödeme Yöntemi
              </InputLabel>
              <Select
                sx={{ height: "3rem" }}
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
              sx={{ width: "11rem", height: "2.5rem" }}
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
    </Paper>
  );
}
