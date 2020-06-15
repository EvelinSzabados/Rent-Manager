import React from 'react'
import { useState } from "react";
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, Tooltip, } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

export default function Barchart() {
    const [data] = useState([
        { category: "Betonsimítók", amount: 3 },
        { category: "Csiszológépek", amount: 5 },
        { category: "Fúrók", amount: 1 },
        { category: "Faipari gépek", amount: 0 },
        { category: "Tömörítőgépek", amount: 6 },
        { category: "Vizesvágók", amount: 1 },
        { category: "Egyebek", amount: 2 },
        { category: "Hőlégfúvók", amount: 1 },
        { category: "Áramfejlesztők", amount: 4 },
        { category: "Roppantók", amount: 6 },
    ]);
    return (
        <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis max={10} />
            <BarSeries
                valueField="amount"
                argumentField="category"
                fill="#385A7B" />
            <Tooltip />
            <Title text="Purchase per category on this week" />
            <Animation />
        </Chart>
    )
}
