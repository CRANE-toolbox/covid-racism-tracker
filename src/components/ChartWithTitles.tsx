
import React from 'react'
interface props {
    chart: React.ReactNode
    label?: string
    height?: string
    width?: string
}

export const ChartWithTitle = (props: props) => {

    const divStyle = {
        fontSize: 32,
        marginBottom: -20,
        marginLeft: "10%",
        marginRight: "10%"
    };


    return (
        <div>
            <div className="container" style={divStyle}>
                <h3>{props.label}</h3>
            </div>
            <div style={{ height: props.height, width: props.width}}>
                {props.chart}
            </div>
        </div>
    )

}

ChartWithTitle.defaultProps = {
    height: "80vh",
    width: "100vw"
} as Partial<props>;
