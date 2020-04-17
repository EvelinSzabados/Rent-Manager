import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const ChartStyle = makeStyles((theme) => ({
    paper: {
        margin: 0,
        padding: "1rem",
    },
    h6: {
        fontSize: "0.8rem",
        "@media (max-width:600px)": {
            fontSize: "0.5rem",
        },
    },
}));


export default ChartStyle;
