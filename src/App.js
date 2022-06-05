import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./menu-data/data";
import { SnackbarProvider } from "notistack";
import PacmanLoader from "react-spinners/PacmanLoader";



import { useState, useEffect } from "react";

function App() {
  const {
    anayemekler,
    atistirmaliklar,
    burgerler,
    caylar,
    espressolar,
    filtrekahveler,
    kahvaltiliklar,
    kokteyller,
    makarnalar,
    menu,
    mesrubatlar,
    salatalar,
    sandvicler,
    sicakicecekler,
    sogukkahveler,
    tatlilar,
    turkkahveleri,
  } = data;
  const [cartItems, setCartItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const override = `
    display: block;
    margin: 0 auto;
  border-color: red;
  margin-top: 20%;`;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return isLoading ? (
    // If page is still loading then splash screen
    <PacmanLoader
      className="loader"
      color={"#f04040"}
      isLoading={isLoading}
      css={override}
      size={30}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      
    />
  ) : (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
        variant: "success",
      }}
    >
      <Header className="App-header" countCartItems={cartItems.length}></Header>

      <div className="App">
        <div className="app-container">
          <Main
            onAdd={onAdd}
            data={data}
            menu={menu}
            anayemekler={anayemekler}
            atistirmaliklar={atistirmaliklar}
            burgerler={burgerler}
            caylar={caylar}
            espressolar={espressolar}
            filtrekahveler={filtrekahveler}
            kahvaltiliklar={kahvaltiliklar}
            kokteyller={kokteyller}
            makarnalar={makarnalar}
            mesrubatlar={mesrubatlar}
            salatalar={salatalar}
            sandvicler={sandvicler}
            sicakicecekler={sicakicecekler}
            sogukkahveler={sogukkahveler}
            tatlilar={tatlilar}
            turkkahveleri={turkkahveleri}
            cartItems={cartItems}
          ></Main>
          <Basket
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          ></Basket>
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
