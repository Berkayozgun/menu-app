import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import { createTheme } from "@mui/material/styles";

export default function Product(props) {
  const { product, onAdd } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Sepete Eklendi!");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F62F63",
      },
    },
  });

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt="{product.title}"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Ubuntu",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {product.title}
        </Typography>
      </CardContent>

      <CardActions>
        <React.Fragment>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            sx={{
              fontFamily: "Ubuntu",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
            onClick={() => {
              onAdd(product);
              handleClick();
            }}
          >
            Sepete Ekle
          </Button>
        </React.Fragment>
      </CardActions>
    </Card>
  );
}
