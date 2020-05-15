import { ResponsiveLine, Serie } from '@nivo/line'
import React from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface props {
    data: Serie[]
    marginSides?: number
    marginTopBottom?: number
}

export const BasicChart = (props: props) => (
    <ResponsiveLine
        data={props.data}
        margin={{
            top: props.marginTopBottom || 40,
            right: props.marginSides || 50,
            bottom: props.marginTopBottom || 40,
            left: props.marginSides || 50
        }}
        xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
            type: 'linear',
            stacked: false,
        }}
        axisLeft={{
            legend: 'count',
            legendOffset: 12,
        }}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 2 days',
            legend: 'time scale',
            legendOffset: -12,
        }}
        curve="monotoneX"
        enablePointLabel={true}
        pointSize={16}
        pointBorderWidth={1}
        pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
    />
)