import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useSnackbar } from "notistack";

export default function Product(props) {
  const { product, onAdd } = props;

  const { enqueueSnackbar } = useSnackbar(
  );

  const handleClick = () => {
    enqueueSnackbar("Sepete Eklendi!");
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
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
          {product.categoryName}
        </Typography>
      </CardContent>
      <CardActions>
        <React.Fragment>
          <Button
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
