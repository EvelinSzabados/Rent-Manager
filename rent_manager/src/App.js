
import React from 'react'
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Login from "./Login/Login";
import { Route } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
function App() {


  return (
    <React.Fragment>
      <ProductProvider>
        <NotificationProvider>
          <UserProvider>
            <Route exact path="/" component={Login} />
            <ThemeProvider theme={theme}>
              <Route path="/app" component={Dashboard} />
            </ThemeProvider>
          </UserProvider>
        </NotificationProvider>
      </ProductProvider>


    </React.Fragment>



  );
}

export default App;
