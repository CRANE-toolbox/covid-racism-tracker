import React, { useEffect, useState } from 'react';
import styles from '../styles/graphPreview.module.less';
import useHover from '@react-hook/hover';
import { useHistory } from 'react-router-dom';
import { ExternalRoutes } from '../routes';
import { COLORS } from '../styles/colors';
import { Modal, Button } from 'antd';
import { CircleClose, FlowGraphImg, LineGraphImg } from '../assets/assets.index';

interface Props {
  title: string;
  modalTitle?: string;
  graph?: React.ReactNode;
  textContent?: string;
  GraphicType?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  hoverText?: string;
  hoverColor?: COLORS;
  downloadLink?: string;
}


export const GraphPreview: React.FC<Props> = (props: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const target = React.useRef(null);
  const isHovering = useHover(target);
  const [state, setState] = useState(0);

  const modalStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <Modal
        visible={modalIsOpen}
        bodyStyle={modalStyle}
        centered={true}
        width="95vw"
        mask={true}
        onCancel={() => setIsOpen(false)}
        footer={null}
        children={ModalContent(props)}
        closeIcon={<CircleClose style={{ width: '2.5rem', height: '2.5rem', marginTop: '.75rem' }} />}
      />
      <div className={styles.Box} ref={target} onClick={() => setIsOpen(true)}>
        {isHovering ? RenderHoverState(props) : RenderRestingState(props)}
      </div>
    </>
  );
};

const ModalContent: React.FC<Props> = (props: Props) => {
  const { modalTitle, textContent, graph } = props;
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log('Hit');
    setState(1);
  });
  let history = useHistory();
  return (
    <div className={styles.ModalContentWrapper}>
      <h1 className={styles.ModalTitle}>{modalTitle}</h1>
      {graph}
      <body>{textContent}</body>
      <Button className={styles.ActionButton} onClick={() => {setState(1); history.push(ExternalRoutes.GITHUB)}}>
        Access our research Repo
      </Button>
    </div>
  );
};

const RenderRestingState: React.FC<Props> = (props: Props) => {
  const { title, GraphicType } = props;
  return (
    <div className={styles.RestingWrapper}>
      <div className={styles.Title} style={{}}>
        {title}
      </div>
      {GraphicType ? <GraphicType className={styles.SVGPrev} /> : null}
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
  FLOW: FlowGraphImg,
  LINE: LineGraphImg,
} as const;
