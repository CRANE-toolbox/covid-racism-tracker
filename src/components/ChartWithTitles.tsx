import React from 'react';
interface props {
  chart: React.ReactNode;
  label?: string | React.ReactNode;
  height?: string;
  width?: string;
}

export const ChartWithTitle = (props: props) => {
  const divStyle = {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%',
  };
  return (
    <div>
      <div className="container" style={divStyle}>
        {props.label ? labelHelper(props.label) : null}
      </div>
      <div style={{ height: props.height, width: props.width }}>{props.chart}</div>
    </div>
  );
};

const labelHelper = (label: string | React.ReactNode) => {
  if (typeof label === 'string') {
    return <h3>{label}</h3>;
  } else {
    return label;
  }
};

ChartWithTitle.defaultProps = {
  height: '50vh',
  width: '100vw',
} as Partial<props>;
