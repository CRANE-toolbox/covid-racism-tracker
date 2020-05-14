
import React from 'react'
import { NivoContainer } from './NivoTools';
interface props {
    chart: React.ReactNode
    label?: string
    height?: string
    width?: string
}

export const ChartWithTitle = (props: props) => {
    return (
        <div style={{ height: props.height, width: props.width }}>
            <p>{props.label}</p>
            {props.chart}
        </div>
    )

}

ChartWithTitle.defaultProps = {
    height: "50vh",
    width: "100vw"
} as Partial<props>;