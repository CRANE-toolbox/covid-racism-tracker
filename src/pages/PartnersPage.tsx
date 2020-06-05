import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/PartnersPage.module.less';

interface Props {}

export const PartnersPage: React.FC<Props> = () => {
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.PartnersPageColumnContent}>
          <h1 className={styles.h1}>For Organizations and Partners</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.PartnersPageColumnContent}>
          <body>
            <p>
              <strong>What can you do with this data?</strong>
            </p>
            <p>
              There are many nonprofits and social impact enterprises in existence fighting to combat the spread of hate speech and provide support to those targeted. This data
              does more than provide evidence for sinophobic and xenophobic outbursts in response to the Coronavirus pandemic; it can help organizations see who is being directly
              affected.
            </p>
            <p>
              It provides quantitative and qualitative backing for your claims. Proof that there are more ramifications than purely biological ones from this disease. This data
              gives you the what, allowing you to give motivations to your why.
            </p>
          </body>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button size="large" className={styles.ActionButton} onClick={() => {}}>
            <strong> Download</strong>
          </Button>
        </Col>
        <Col>
          <Button size="large" className={styles.ActionButton} onClick={() => {}}>
            <strong> Contact</strong>
          </Button>
        </Col>
      </Row>
    </Layout.Content>
  );
};
