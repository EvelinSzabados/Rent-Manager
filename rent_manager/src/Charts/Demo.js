import * as React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import Grid from "@material-ui/core/Grid";

const mainStyle = makeStyles((theme) => ({
  paper: {
    margin: 0,
    padding: "1rem",
  },
  chart: {
    color: "#7DA5C6",
  },
}));

export default function Demo() {
  const [data, setData] = useState([
    { category: "Betonsimítók", amount: 3 },
    { category: "Csiszológépek", amount: 5 },
    { category: "Fúrók", amount: 1 },
    { category: "Faipari gépek", amount: 0 },
    { category: "Tömörítőgépek", amount: 7 },
    { category: "Vizesvágók", amount: 1 },
    { category: "Egyebek", amount: 2 },
    { category: "Hőlégfúvók", amount: 1 },
    { category: "Áramfejlesztők", amount: 4 },
    { category: "Roppantók", amount: 6 },
  ]);
  const classes = mainStyle();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={10}>
        <Paper className={classes.paper}>
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis max={10} className={classes.chart} />
            <BarSeries valueField="amount" argumentField="category" />
            <Title text="Purchase per category on this week" />
            <Animation />
          </Chart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" color="secondary">
            New customers this week:
          </Typography>
          <Typography variant="h4">4</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
