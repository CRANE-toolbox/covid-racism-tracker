import React, { useState, useEffect } from 'react';
import styles from '../styles/graphPreview.module.less';
import useHover from '@react-hook/hover';
import { ReactComponent as LineGraph } from '../assets/graph-line.svg';
import { ReactComponent as FlowGraph } from '../assets/flow-graph.svg';
import { COLORS } from '../styles/colors';
import { Modal } from 'antd';
import { ChartWithTitle } from './ChartWithTitles';
import { BasicChart } from '../charts/lineChart';
import { ReactComponent as CloseIcon } from '../assets/circle-close.svg';
import { CustomResponsiveBump } from '../charts/areaBump';

interface Props {
  title: string;
  graph: React.ReactNode;
  GraphicType: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  hoverText?: string;
  hoverColor?: COLORS;
}

export const GraphPreview: React.FC<Props> = (props: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { title, graph, GraphicType } = props;
  const target = React.useRef(null);
  const isHovering = useHover(target);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    width: '100%',
    height: '100%',
    border: 'none;',
  };

  return (
    <>
      <Modal
        visible={modalIsOpen}
        bodyStyle={modalStyle}
        centered={true}
        width="95vw"
        mask={false}
        onCancel={closeModal}
        footer={null}
        closeIcon={<CloseIcon style={{ width: '2.5rem', height: '2.5rem', marginTop: '.75rem' }} />}
      ></Modal>
      <div className={styles.Box} ref={target} onClick={openModal}>
        {isHovering ? RenderHoverState(props) : RenderRestingState(props)}
      </div>
    </>
  );
};

const RenderRestingState: React.FC<Props> = (props: Props, target) => {
  const { title, GraphicType } = props;
  return (
    <div className={styles.RestingWrapper}>
      <div className={styles.Title}> {title}</div>
      <GraphicType className={styles.SVGPrev} />
    </div>
  );
};

const RenderHoverState: React.FC<Props> = (props: Props) => {
  const { hoverText, hoverColor } = props;
  const style = {
    backgroundColor: hoverColor,
    color: hoverColor ? undefined : '#000000',
  };
  return (
    <div className={styles.HoverText} style={style}>
      {hoverText}
    </div>
  );
};

export const GraphType = {
  FLOW: FlowGraph,
  LINE: LineGraph,
} as const;
