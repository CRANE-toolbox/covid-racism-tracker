
import React from 'react'
import { NivoContainer } from './NivoTools';
interface props {
    chart: React.ReactNode
    label?: string
    height?: string
    width?: string
}

export const ChartWithTitle = (props: props) => {

    const divStyle = {
        fontSize: 20,
        marginBottom: -20
    };


    return (
        <div style={{ height: props.height, width: props.width }}>
          <div className="container" style={divStyle}>
            <p>{props.label}</p>
          </div>
            {props.chart}
        </div>
    )

}

ChartWithTitle.defaultProps = {
    height: "50vh",
    width: "100vw"
} as Partial<props>;
