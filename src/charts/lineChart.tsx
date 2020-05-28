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
            format: '%d-%b-%Y',
            precision: 'day',
        }}
        xFormat="time:'%d-%b-%Y'"
        yScale={{
            type: 'linear',
            stacked: false,
        }}
        axisLeft={{
            legend: 'frequency',
            legendOffset: 12,
        }}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 7 days',
            legend: 'time scale',
            legendOffset: -12,
        }}
        curve="monotoneX"
        enablePointLabel={false}
        colors={{ scheme: 'dark2' }}
        pointSize={3}
        pointBorderWidth={1}
        pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
        legends={[
            {
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 20,
                symbolSize: 10,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
