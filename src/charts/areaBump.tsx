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
export const CustomResponsiveBump = (props: props) => (
    <ResponsiveAreaBump
        data={props.data}
        // Change the margin here for the charts, doing so in the divs does not place nicely.
        margin={{
            top: props.marginTopBottom || 40,
            right: props.marginSides || 200,
            bottom: props.marginTopBottom || 40,
            left: props.marginSides || 200
        }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
    />
)
