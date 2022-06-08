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

  const [cartItems, setCartItems] = useState([]);                           /* sepet state'i */

  const [isLoading, setIsLoading] = useState(true);                      /* loading state'i */                        

  useEffect(() => {                                                       /* splash screen için zaman düzenlemesi*/
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const override = {                                        /* splash screen için style düzenlemesi*/
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "20%",
  };

  const onAdd = (product) => {                                                            /* sepete ekleme işlemi */
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

  const onRemove = (product) => {                                                         /* sepetten çıkarma işlemi */
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

  return isLoading ? (                                                              /* splash screen yüklenir eğer loading state'i tetiklenirse*/
    <PacmanLoader
      className="loader"
      color={"#f04040"}
      isLoading={isLoading}
      css={override}
      size={35}
      speedMultiplier={2}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
    />
  ) : (
    <SnackbarProvider                                         /* splash screen sonrası render edilen componentler */
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
          />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
