import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChartStyle from "../Styles/ChartStyle";
import Barchart from "./Barchart";


export default function Demo() {

  const classes = ChartStyle();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={10}>
        <Paper className={classes.paper}>
          <Barchart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={2}>
        <Paper className={classes.paper}>
          <Typography className={classes.h6} variant="h6" color="error">
            New customers this week:
          </Typography>
          <Typography variant="h4">4</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
