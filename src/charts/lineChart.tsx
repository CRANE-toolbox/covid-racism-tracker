import { ResponsiveLine, Serie } from '@nivo/line';
import React from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface props {
  data: Serie[];
  marginSides?: number;
  marginTopBottom?: number;
}

//const colorSchemeRachael = ["#FFCA0F", "#ED5958", "#3CAEA3", "#B9D870", "#F89900", "#8DB039", "#63A5A7", "#8D88BD", "#BBD1D5"];
//const colorSchemeSveta1 = ["#ED5959", "#68C6A4", "#F1B531", "#20639B", "#61157C", "#FFCA0F", "#68C6A4", "#F6DEB9", "#F28665", "#DBDD15"]
//const colorSchemeSveta2 = ["#FFCA0F", "#8D88BD", "#BBD1D5", "#63A5A7", "#8DB039", "#F89900", "#B9D870", "#3CAEA3", "#424C6E", "#ED5958"]
//const colorSchemeSveta3 = ["#673BB7", "#8BC24A", "#00BCD2", "#E71E62", "#FDC006", "#9C28B1", "#2196F3", "#FEEA3B", "#ED5958", "#CCDB3A"]
const finalColorScheme = ['#0B5DA2', '#138F60', '#48A4E3', '#8BC24A', '#9C28B1', '#BF6196', '#C8C5FD', '#DE8E08', '#E71E67', '#ECE134'];

// const MyPointTooltip = (point: Point) => {
//     return (
//         <BasicTooltip
//             id={
//                 <span>
//                     <strong>{point.data.xFormatted}</strong>:{' '}
//                     <strong>{point.data.yFormatted}</strong>
//                 </span>
//             }
//             enableChip={true}
//             color={point.serieColor}
//         />
//     )
// }
//
// MyPointTooltip.propTypes = {
//     point: PropTypes.object.isRequired,
// }

const theme = {
  axis: {
    legend: {
      text: {
        fontFamily: 'Roboto',
        fontSize: '16px',
      },
    },
    ticks: {
      text: {
        fontFamily: 'Roboto',
        fontSize: '12px',
      },
    },
  },
  legends: {
    text: {
      fontFamily: 'Roboto',
      fontSize: '14px',
    },
  },
  tooltip: {
    container: {
      fontFamily: 'Roboto',
    },
  },
};

export const BasicChart = (props: props) => (
  <ResponsiveLine
    data={props.data}
    margin={{
      top: props.marginTopBottom || 40,
      right: props.marginSides || 100,
      bottom: props.marginTopBottom || 55,
      left: props.marginSides || 130,
    }}
    theme={theme}
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
    yFormat="0.4%"
    axisLeft={{
      legend: 'Percent of tweets containing the slur',
      legendPosition: 'middle',
      legendOffset: -85,
      format: (value) => `${(Number(value) * 1000000) / 10000}%`, // Weird multiplication-division tip to avoid imprecise decimals
    }}
    axisBottom={{
      format: '%b %d',
      legend: 'Time',
      legendPosition: 'middle',
      legendOffset: 40,
    }}
    enableGridX={false}
    curve="monotoneX"
    enablePointLabel={false}
    colors={finalColorScheme}
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
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    // tooltip = {MyPointTooltip}
  />
);

export const TopicLineChart = (props: props) => (
  <ResponsiveLine
    data={props.data}
    margin={{
      top: props.marginTopBottom || 40,
      right: props.marginSides || 500,
      bottom: props.marginTopBottom || 55,
      left: props.marginSides || 100,
    }}
    theme={theme}
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
      legendPosition: 'middle',
      legendOffset: -50,
      format: (value) => `${value}%`,
    }}
    axisBottom={{
      format: '%b %d',
      legend: 'Time',
      legendPosition: 'middle',
      legendOffset: 40,
    }}
    enableGridX={false}
    curve="monotoneX"
    enablePointLabel={false}
    colors={({ id }) => {
      /**
       * Super ugly solution to render colors based on the keyword. Would be a good idea to abstract this
       * out to something more general in the future.
       *
       * Todo: Refactor this into something more general
       */
      if (id === 'Negative sentiment towards China/Chinese people' || id === 'China-related, including alternative names for covid19' || id === 'Linking China and Covid19') {
        return finalColorScheme[0];
      } else if (id === 'Mistrust, cover-up, and lies' || id === 'Opinion debates around medicine') {
        return finalColorScheme[1];
      } else if (id === 'Location names') {
        return finalColorScheme[2];
      } else if (id === 'Biowar') {
        return finalColorScheme[3];
      } else if (id === 'Alternative names for Covid19' || id === 'Neutral alternative names for Covid19') {
        return finalColorScheme[4];
      } else if (id === 'International trade and diplomacy') {
        return finalColorScheme[5];
      } else if (id === 'USA politics' || id === 'Related to countries other than China') {
        return finalColorScheme[6];
      } else if (id === 'Chinese politics') {
        return finalColorScheme[7];
      } else {
        return finalColorScheme[8];
      }
    }}
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
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 20,
        itemsSpacing: 12,
        symbolSize: 10,
        symbolShape: 'circle',
        itemDirection: 'left-to-right',
        itemTextColor: '#777',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
