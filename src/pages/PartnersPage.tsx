import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/PartnersPage.module.less';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routes';
interface Props {}

export const PartnersPage: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.PartnersPageColumnContent}>
          <h1 className={styles.h1}>For Organizations and Partners</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.PartnersPageColumnContent}>
          <p><strong>What can you do with this data?</strong></p>
          <p>
            There are many nonprofits and social impact enterprises in existence
            fighting to combat the spread of hate speech and provide support to
            those targeted. This data does more than provide evidence for sinophobic
            and xenophobic outbursts in response to the Coronavirus pandemic; it can
            help organizations see who is being directly affected.
          </p>
          <p>
            It provides quantitative and qualitative backing for your claims. Proof
            that there are more ramifications than purely biological ones from this
            disease. This data gives you the what, allowing you to give motivations
            to your why.
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button
            size="large"
            autoFocus={true}
            className={styles.ActionButton}
            onClick={() => {
              history.push(Routes.DATA);
            }}
          >
            Download
          </Button>
        </Col>
        <Col>
          <Button
            size="large"
            className={styles.ActionButton}
            onClick={() => {
              history.push(Routes.SUPPORT);
            }}
          >
            Contact
          </Button>
        </Col>
      </Row>
    </Layout.Content>
  );
};
