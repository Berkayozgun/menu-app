import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

export default function Header(props) {

  const { countCartItems } = props;

  return (
    <Box className="App-header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#8F8AC0", width: "100%" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton                                                 /* Home Butonu */
            size="large"
            color="inherit"
            href="/"
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <HomeIcon />
          </IconButton>

          <Typography                                               /* Title */
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Ubuntu",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <center>Restoranımıza hoş geldiniz!</center>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}       /* Sepet iconu ve dinamik badge */>                 
            <IconButton size="large" color="inherit">
              <Badge badgeContent={countCartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
