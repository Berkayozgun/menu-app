import React, { useRef } from "react";
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
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import emailjs from "@emailjs/browser";
import { hover } from "@testing-library/user-event/dist/hover";

export default function Basket(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_dah8wml",
        e.target,
        "user_UaagZiVf2vgNi3oJnCr1V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#e0e0e0",
    color: "#000000",
    border: "2px solid #fff",
    borderRadius: "15rem",
    boxShadow: 24,
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F62F63",
      },
    },
  });

  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 50 ? 0 : 4.99;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <form onSubmit={sendEmail}>
      <Paper className="basket-body">
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <center>Sepetiniz</center>
        </Typography>

        <div>
          {cartItems.length === 0 && (
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "1rem",
                marginTop: "1rem",
                color: "#ABB8C9",
              }}
            >
              <center>Sepetinize henüz ekleme yapmadınız.</center>
            </Typography>
          )}
        </div>

        {cartItems.map((item) => (
          <Paper
            elevation={10}
            sx={{ margin: "10px", padding: "10px" }}
            key={item.id}
            className="row"
          >
            <div className="col-2">
              <div className="col-2">
                <Typography
                  sx={{
                    fontFamily: "Ubuntu",
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "#000000",
                    width: "8rem",
                  }}
                >
                  <center>{item.title}</center>
                </Typography>
              </div>
            </div>
            <div>
              <ButtonGroup
                sx={{ marginLeft: "50%" }}
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button onClick={() => onRemove(item)} className="remove">
                  -
                </Button>
                <Button className="qty">{item.qty}</Button>

                <Button onClick={() => onAdd(item)} className="add">
                  +
                </Button>
              </ButtonGroup>
            </div>
          </Paper>
        ))}

        {cartItems.length !== 0 && (
          <div sx={{ marginTop: "15rem" }}>
            <Paper
              sx={{
                marginTop: "3rem",
                marginLeft: "1rem",
                marginBottom: "2rem",
              }}
              elevation={0}
            >
              <div className="basket-row">
                <div className="col-2 sepet-text">
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontWeight: "light",
                      fontSize: "1rem",
                      color: "#000000",
                    }}
                  >
                    Sepet Tutarı
                  </Typography>
                </div>
                <div className="col-1 price-text">
                  {itemsPrice.toFixed(2)} TL
                </div>
              </div>

              <Divider />
            </Paper>

            <Paper
              sx={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              elevation={0}
            >
              <div className="basket-row">
                <div className="col-2 sepet-text">
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontWeight: "light",
                      fontSize: "1rem",
                      color: "#000000",
                    }}
                  >
                    Teslimat Ücreti
                  </Typography>
                </div>

                <div className="col-1 price-text">
                  {shippingPrice.toFixed(2)} TL
                </div>
              </div>
            </Paper>

            <Divider />

            <Paper
              sx={{
                marginTop: "2rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              elevation={0}
            >
              <div className="basket-row">
                <div className="col-2 sepet-text">
                  <strong>Toplam Tutar</strong>
                </div>

                <div className="col-1 price-text">
                  <strong>{totalPrice.toFixed(2)} TL</strong>
                </div>
              </div>
            </Paper>

            <TextField
              value={totalPrice.toFixed(2)}
              name="total_price"
              sx={{ display: "none" }}
            ></TextField>

            <TextField
              label="İsminiz"
              size="small"
              type="text"
              placeholder="İsim Soyisim"
              name="from_name"
              sx={{ margin: "0.5rem" }}
            />

            <TextField
              label="E-mail"
              size="small"
              sx={{ margin: "0.5rem" }}
              type="email"
              placeholder="E-Posta"
              name="from_email"
            />

            <TextField
              label="Telefon"
              size="small"
              sx={{ margin: "0.5rem" }}
              type="number"
              placeholder="Telefon Numaranız"
              name="from_phone"
            />

            <TextField
              label="Teslimat adresi"
              size="small"
              sx={{ margin: "0.5rem", width: "90%", height: "fit-content" }}
              placeholder="Adresiniz:"
              name="from_address"
            ></TextField>

            <FormControl
              fullWidth
              sx={{ width: "11rem", height: "5rem", margin: "0.5rem" }}
            >
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

            <Button
              type="submit"
              theme={theme}
              variant="contained"
              sx={{ width: "11rem", height: "2.5rem" }}
              onClick={() => {
                {
                  setOpen(true);
                }
              }}
            >
              Siparişi Onayla
            </Button>

            <div className="row">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <center> Siparişiniz verildi!</center>
                  </Typography>

                  <Button
                    className="modal"
                    href="/"
                    sx={{
                      width: "11rem",
                      height: "2.5rem",
                      marginTop: "1rem",
                      color: "#ffffff",
                      backgroundColor: "#5d3ebc",
                      "&:hover": {
                        backgroundColor: "#4b27b6",
                      },
                    }}
                    variant="outlined"
                  >
                    Ana Sayfaya Dön
                  </Button>
                </Box>
              </Modal>
            </div>
          </div>
        )}
      </Paper>
    </form>
  );
}
