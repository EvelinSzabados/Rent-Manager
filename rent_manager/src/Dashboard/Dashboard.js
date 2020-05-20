import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";
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
import { AvailableProductProvider } from "../context/AvailableProductContext";
import { RentPerCategoryProvider } from "../context/RentPerCategoryContext";
import { UserContext } from "../context/UserContext";
import { RentProvider } from "../context/RentContext";
import { ChartProvider } from "../context/ChartContext";
import { RentTableProvider } from "../context/RentTableContext";
import { logOut } from "../Login/Logout";
import Register from "../Register/Register";
import RentList from "../NewRent/RentList";
import { NotificationProvider } from "../context/NotificationContext";
import Notification from "../Charts/Notification";

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = DashboardStyle();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useContext(UserContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        <MenuItems />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img
            alt="logo"
            src={logo}
            style={{ maxWidth: "50px", margin: "10px" }}
          />
          <Typography variant="h6" noWrap className={classes.title}>
            Rent Manager
          </Typography>
          <p>
            Logged in user: <span className="user_span">{user.username}</span>
          </p>
          <span className="logout_span">
            <Link
              to="/"
              onClick={logOut}
              style={{
                textDecoration: "none",
                color: "lightblue",
                border: "none",
              }}
            >
              Log out
            </Link>
          </span>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <NotificationProvider>
          <ProductProvider>
            <AvailableProductProvider>
              <CategoryProvider>
                <RentPerCategoryProvider>
                  <ChartProvider>
                    <Route exact path="/app" component={Charts} />
                    <Route path="/app/notification" component={Notification} />
                  </ChartProvider>
                </RentPerCategoryProvider>

                <ProductTableProvider>
                  <Route path="/app/products" component={ProductList} />
                </ProductTableProvider>
              </CategoryProvider>

              <CustomerProvider>
                <CustomerTableProvider>
                  <Route path="/app/customers" component={CustomerList} />
                </CustomerTableProvider>
              </CustomerProvider>
              <RentProvider>
                <RentTableProvider>
                  <Route path="/app/rent" component={RentList} />
                </RentTableProvider>
              </RentProvider>
              <CustomerProvider>
                <Route path="/app/newRent" component={NewRent} />
              </CustomerProvider>
            </AvailableProductProvider>
          </ProductProvider>
        </NotificationProvider>
        <Route path="/app/register" component={Register} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default ResponsiveDrawer;
