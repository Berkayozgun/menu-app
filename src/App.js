import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './menu-data/data';

import {useState} from 'react';

function App() {
 
  const{anayemekler,atistirmaliklar,burgerler,caylar,espressolar,filtrekahveler,kahvaltiliklar,
        kokteyller,makarnalar,menu,mesrubatlar,salatalar,sandvicler,sicakicecekler,sogukkahveler,tatlilar,turkkahveleri} = data;
  const[cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
         x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
      );
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
      
    };
  
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      }
      else{
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? {...exist, qty: exist.qty -1} : x
          )
        );
      
      }
      };
    
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} data={data} menu={menu} anayemekler={anayemekler} atistirmaliklar={atistirmaliklar}
                            burgerler={burgerler} caylar={caylar} espressolar={espressolar} 
                            filtrekahveler={filtrekahveler} kahvaltiliklar={kahvaltiliklar}
                            kokteyller={kokteyller} makarnalar={makarnalar} mesrubatlar={mesrubatlar}
                            salatalar={salatalar} sandvicler={sandvicler} sicakicecekler={sicakicecekler}
                            sogukkahveler={sogukkahveler} tatlilar={tatlilar} turkkahveleri={turkkahveleri}
                            cartItems={cartItems}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
