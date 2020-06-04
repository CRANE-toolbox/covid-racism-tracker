import React from 'react';
import CSS from 'csstype';
import styles from '../styles/graphPreview.module.less';
interface props {
  chart: React.ReactNode;
  label?: string | React.ReactNode;
  height?: string;
  width?: string;
  centerTitle: boolean;
}

export const ChartWithTitle = (props: props) => {
  const divStyle: CSS.Properties = {
    fontSize: '1.25rem',
    marginTop: '1.25rem',
    marginBottom: '0.625rem',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: props.centerTitle ? 'center' : 'inherit',
  };
  return (
    <div>
      <div style={divStyle}>{props.label ? labelHelper(props.label) : null}</div>
      <div style={{ height: props.height, width: props.width }} className={styles.Graph}>
        {props.chart}
      </div>
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
