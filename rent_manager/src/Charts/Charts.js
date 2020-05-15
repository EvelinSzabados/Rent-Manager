import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChartStyle from "../Styles/ChartStyle";
import ZingChart from 'zingchart-react';



export default function Demo() {

  const [state] = useState({
    config: {
      type: 'bar',
      scaleX: {

        label: { text: 'Days' },

        labels: [4, 5, 3, 4, 5, 3, 5, 4, 11]
      },
      series: [{
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],

      }],

    }
  })

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
          <Typography className={classes.h6} variant="h6" color="error">
            Notifications:
          </Typography>
          <Typography variant="h4">4</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
