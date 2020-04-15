import * as React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const mainStyle = makeStyles((theme) => ({
  paper: {
    width: "90%",
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
    <Paper className={classes.paper}>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis max={7} />

        <BarSeries valueField="amount" argumentField="category" />
        <Title text="Purchase per category on this week" />
        <Animation />
      </Chart>
    </Paper>
  );
}
