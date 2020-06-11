import React, { useState, createContext, useEffect, useContext } from "react";
import { RentPerCategoryContext } from "./RentPerCategoryContext";
import { AvailableProductContext } from "./AvailableProductContext";

export const ChartContext = createContext();

export const ChartProvider = (props) => {

    const [state, setState] = useState({ config: { type: 'bar', } });
    const { rentPerCategory } = useContext(RentPerCategoryContext);
    const { product } = useContext(AvailableProductContext);

    useEffect(() => {
        let categorySeries = []
        Object.keys(rentPerCategory).map(categoryName => (
            categorySeries.push(
                {
                    values: [rentPerCategory[categoryName]], text: categoryName, 'background-color': "#6666FF #FF0066",
                    alpha: 0.3
                }
            )
        ))
        setState(() => {
            return ({
                config: {
                    type: 'bar',

                    title: {
                        text: "Number of rented products this week per category",
                        color: "#6d558e"
                    },
                    plot: {
                        animation: {
                            effect: "11",
                            method: "3",
                            sequence: "ANIMATION_BY_PLOT_AND_NODE",
                            speed: 10
                        },
                        tooltip: {
                            text: "%t - %v"
                        }
                    },
                    scaleX: {
                        labels: ["Categories"]
                    },
                    series: categorySeries,
                }
            })
        })
    }, [rentPerCategory, product])

    return (
        <ChartContext.Provider value={{ state, setState }}>
            {props.children}
        </ChartContext.Provider>
    );
};