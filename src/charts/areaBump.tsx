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

const finalColorScheme = ["#0B5DA2", "#138F60", "#48A4E3", "#8BC24A", "#9C28B1", "#BF6196", "#C8C5FD", "#DE8E08", "#E71E67"]

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
        colors={ ({ id }) => {
            if (id === "Negative sentiment towards China/Chinese people" || id === "China-related, including alternative names for covid19" || id === "Linking China and Covid19") {
              return(finalColorScheme[0])
            }
            else if (id === "Mistrust, cover-up, and lies" || id === "Opinion debates around medicine") {
              return(finalColorScheme[1])
            }
            else if (id === "Location names") {
              return(finalColorScheme[2])
            }
            else if (id === "Biowar") {
              return(finalColorScheme[3])
            }
            else if (id === "Alternative names for Covid19" || id === "Neutral alternative names for Covid19") {
              return(finalColorScheme[4])
            }
            else if (id === "International trade and diplomacy") {
              return(finalColorScheme[5])
            }
            else if (id === "USA politics" || id === "Related to countries other than China") {
              return(finalColorScheme[6])
            }
            else if (id === "Chinese politics") {
              return(finalColorScheme[7])
            }
            else {
              return(finalColorScheme[8])
            }
        }}
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
