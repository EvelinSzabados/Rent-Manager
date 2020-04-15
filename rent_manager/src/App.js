import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
