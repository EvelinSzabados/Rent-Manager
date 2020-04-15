import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#078591",
    },
    secondary: {
      main: "#7DA5C6",
    },
    error: {
      main: "#dc004e",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
