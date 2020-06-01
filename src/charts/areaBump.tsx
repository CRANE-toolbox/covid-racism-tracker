import { ResponsiveAreaBump, AreaBumpInputSerie } from '@nivo/bump'
import React from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface props {
    data: AreaBumpInputSerie[]
    marginSides?: number
    marginTopBottom?: number

}

const colorSchemeRachael = ["#FFCA0F", "#ED5958", "#3CAEA3", "#B9D870", "#F89900", "#8DB039", "#63A5A7", "#8D88BD", "#BBD1D5"];
const colorSchemeSveta1 = ["#ED5959", "#68C6A4", "#F1B531", "#20639B", "#61157C", "#FFCA0F", "#68C6A4", "#F6DEB9", "#F28665", "#DBDD15"]
const colorSchemeSveta2 = ["#FFCA0F", "#8D88BD", "#BBD1D5", "#63A5A7", "#8DB039", "#F89900", "#B9D870", "#3CAEA3", "#424C6E", "#ED5958"]
const colorSchemeSveta3 = ["#CCDB3A", "#673BB7", "#8BC24A", "#00BCD2", "#E71E62", "#FDC006", "#9C28B1", "#2196F3", "#FEEA3B", "#ED5958"]

const theme = {
    axis: {
        legend: {
            text: {
                fontFamily: "Roboto",
                fontSize: "16px",
            }
        },
        ticks: {
            text: {
                fontFamily: "Roboto",
                fontSize: "12px",
            },
        },
    },
    labels: {
        text: {
          fontFamily: "Roboto",
          fontSize: "16px",
        },
    },
    tooltip: {
        container: {
            fontFamily: 'Roboto',
        },
    },
};

export const CustomResponsiveBump = (props: props) => (
    <ResponsiveAreaBump
        data={props.data}
        // Change the margin here for the charts, doing so in the divs does not place nicely.
        margin={{
            top: props.marginTopBottom || 40,
            right: 390,
            bottom: props.marginTopBottom || 70,
            left: props.marginSides || 55
        }}
        theme={theme}
        spacing={8}
        colors={ colorSchemeRachael }
        blendMode="multiply"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time',
            legendPosition: 'middle',
            legendOffset: 40
        }}
    />
)
