import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { Route, BrowserRouter } from "react-router-dom";
import MenuItems from "./MenuItems";
import Charts from "../Charts/Charts";
import logo from "../Images/logo.svg";
import ProductList from "../ProductList/ProductList";
import CustomerList from "../Customer/CustomerList";
import NewRent from "../NewRent/NewRent";
import { ProductProvider } from "../context/ProductContext";
import { CategoryProvider } from "../context/CategoryContext";
import DashboardStyle from "../Styles/DashboardStyle";
import { ProductTableProvider } from "../context/ProductTableContext";
import { CustomerTableProvider } from "../context/CustomerTableContext";
import { CustomerProvider } from "../context/CustomerContext";


function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = DashboardStyle();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <MenuItems />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <img alt="logo" src={logo} style={{ maxWidth: "50px", margin: "10px" }} />
          <Typography variant="h6" noWrap className={classes.title}>
            Rent Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer container={container} variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{ paper: classes.drawerPaper, }}
              ModalProps={{ keepMounted: true, }}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper, }} variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Route exact path="/" render={() => <Charts />} />
          <ProductProvider>
            <CategoryProvider>
              <ProductTableProvider>
                <Route path="/products" render={() => <ProductList />} />
              </ProductTableProvider>
            </CategoryProvider>
          </ProductProvider>

          <CustomerProvider>
            <CustomerTableProvider>
              <Route path="/customers" render={() => <CustomerList />} />
            </CustomerTableProvider>
          </CustomerProvider>
          <Route path="/rent" render={() => <NewRent />} />
        </main>
      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default ResponsiveDrawer;
