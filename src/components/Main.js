import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Product from "./Product";
import "../index.css";
import { useSnackbar } from "notistack";



const tabStyle = {
  fontSize: "12px",
  textAlign: "center",
  fontWeight: "bold",
  color: "white",
};



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Main(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  const { enqueueSnackbar } = useSnackbar(
  );

  const handleClick = () => {
    enqueueSnackbar("Sepete Eklendi!");
  };

  const {
    anayemekler,
    data,
    atistirmaliklar,
    burgerler,
    caylar,
    espressolar,
    filtrekahveler,
    kahvaltiliklar,
    kokteyller,
    makarnalar,
    mesrubatlar,
    salatalar,
    sandvicler,
    sicakicecekler,
    sogukkahveler,
    tatlilar,
    turkkahveleri,
    onAdd,
  } = props;

  return (
    <div className="flex-container">
      <Box sx={{ width: "100%" }}>
        <Box
          className="flex-container-child-1"
          sx={{  }}
        >
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{ fontWeight: "bold",
                    backgroundColor: "#F62F63",
                    marginTop: "1rem", 
                    borderRadius: "3rem",
                    width:"137%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",}}
           indicatorColor="white"
          >
            <Tab label="Ana Yemek" {...a11yProps(0)} style={tabStyle} />
            <Tab label="Atıştırmalık" {...a11yProps(1)} style={tabStyle} />
            <Tab label="Burger" {...a11yProps(2)} style={tabStyle} />
            <Tab label="Sıcak İçecek" {...a11yProps(3)} style={tabStyle} />
            <Tab label="Soğuk İçecek" {...a11yProps(4)} style={tabStyle} />
            <Tab label="Kahvaltı" {...a11yProps(5)} style={tabStyle} />
            <Tab label="Makarna" {...a11yProps(6)} style={tabStyle} />
            <Tab label="Salata" {...a11yProps(7)} style={tabStyle} />
            <Tab label="Sandviç" {...a11yProps(8)} style={tabStyle} />
            <Tab label="Tatlı" {...a11yProps(9)} style={tabStyle} />
          </Tabs>
        </Box>

        <Paper className="block col-2 main-menu">
          
          <TabPanel name="anayemekler" value={value} index={0}>
          
            <main className="block col-2">
              <h2>
                <center>Ana Yemekler</center>
              </h2>
              
              <div className="row">
                
                {anayemekler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="atistirmaliklar" value={value} index={1}>
            <main className="block col-2">
              <h2>
                <center>Atıştırmalıklar</center>
              </h2>
              <div className="row">
                {atistirmaliklar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Burgerler" value={value} index={2}>
            <main className="block col-2">
              <h2>
                <center>Burgerler</center>
              </h2>
              <div className="row">
                {burgerler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Sıcak İçecekler" value={value} index={3}>
            <main className="block col-2">
              <h2>
                <center>Çaylar</center>
              </h2>
              <div className="row">
                {caylar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <h2>
                <center>Türk Kahveleri</center>
              </h2>
              <div className="row">
                {turkkahveleri.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <h2>
                <center>Espresso</center>
              </h2>
              <div className="row">
                {espressolar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <h2>
                <center>Filtre Kahveler</center>
              </h2>
              <div className="row">
                {filtrekahveler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <h2>
                <center>Sıcak Sütlü</center>
              </h2>
              <div className="row">
                {sicakicecekler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Soğuk İçecekler" value={value} index={4}>
            <main className="block col-2">
              <h2>
                <center>Soğuk Kahveler</center>
              </h2>
              <div className="row">
                {sogukkahveler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <h2>Kokteyller</h2>
              <div className="row">
                {kokteyller.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>

            <main className="block col-2">
              <div className="row">
                {mesrubatlar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Kahvaltılıklar" value={value} index={5}>
            <main className="block col-2">
              <h2>
                <center>Kahvaltılıklar</center>
              </h2>
              <div className="row">
                {kahvaltiliklar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Makarnalar" value={value} index={6}>
            <main className="block col-2">
              <h2>
                <center>Makarnalar</center>
              </h2>
              <div className="row">
                {makarnalar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Salatalar" value={value} index={7}>
            <main className="block col-2">
              <h2>
                <center>Salatalar</center>
              </h2>
              <div className="row">
                {salatalar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Sandviçler" value={value} index={8}>
            <main className="block col-2">
              <h2>
                <center>Sandviçler</center>
              </h2>
              <div className="row">
                {sandvicler.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>

          <TabPanel name="Tatlılar" value={value} index={9}>
            <main className="block col-2">
              <h2>
                <center>Tatlılar</center>
              </h2>
              <div className="row">
                {tatlilar.map((product) => (
                  <Paper elevation={10} >
                  <Product
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                  />
                  </Paper>
                ))}
              </div>
            </main>
          </TabPanel>
        </Paper>
      </Box>
    </div>
  );
}
