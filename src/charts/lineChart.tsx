import { ResponsiveLine, Serie } from '@nivo/line'
import { format } from 'd3-format'
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
            right: props.marginSides || 100,
            bottom: props.marginTopBottom || 40,
            left: props.marginSides || 100
        }}
        xScale={{
            type: 'time',
            format: '%d-%b-%Y',
            precision: 'day',
        }}
        xFormat="time:'%d %b %Y'"
        yScale={{
            type: 'linear',
            stacked: false,
        }}
        yFormat=".4%"
        axisLeft={{
            legend: 'Percent of English original tweets containing the slur',
            legendOffset: -70,
        }}
        axisBottom={{
            format: '%b %d',
            legend: 'Time',
            legendOffset: 40,
        }}
        enableGridX={false}
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
                translateY: -30,
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


export const TopicLineChart = (props: props) => (
    <ResponsiveLine
        data={props.data}
        margin={{
            top: props.marginTopBottom || 40,
            right: props.marginSides || 330,
            bottom: props.marginTopBottom || 40,
            left: props.marginSides || 100
        }}
        xScale={{
            type: 'time',
            format: '%d-%b-%Y',
            precision: 'day',
        }}
        xFormat="time:'%d %b %Y'"
        yScale={{
            type: 'linear',
            stacked: false,
        }}
        yFormat=".0%"
        axisLeft={{
            legend: 'Percent of words related to given topic',
            legendOffset: -40,
        }}
        axisBottom={{
            format: '%b %d',
            legend: 'Time',
            legendOffset: 40,
        }}
        enableGridX={false}
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
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 120,
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
