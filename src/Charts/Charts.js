import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChartStyle from "../Styles/ChartStyle";
import ZingChart from "zingchart-react";
import { ChartContext } from "../context/ChartContext";


export default function Demo() {
  const { state } = useContext(ChartContext);
  const classes = ChartStyle();



  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Paper className={classes.paper}>
          <div>
            <ZingChart data={state.config} />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>

        <Paper className={classes.paper}>
          <Typography className={classes.h5} variant="h5" color="error">
            Welcome to Rent Manager!
          </Typography>
          <Typography variant="h6">
            Rent Manager is a Codecool Programming School project.
            This is an application created for rental companies. In this project we are working with construction machines.
            The application offers CRUD operations on products, customers and rents. 
            
          </Typography>
          <Typography variant="h6">
            Check out notifications tab to see if any product should be brought back by customer.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
