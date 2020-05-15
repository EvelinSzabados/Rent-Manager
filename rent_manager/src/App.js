
import React from 'react'
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Login from "./Login/Login";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./Login/PrivateRoute";
import { UserProvider } from "./context/UserContext";
function App() {


  return (
    <React.Fragment>

      <Route exact path="/" component={Login} />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <PrivateRoute path="/app" component={Dashboard} />
        </UserProvider>
      </ThemeProvider>




    </React.Fragment>



  );
}

export default App;
