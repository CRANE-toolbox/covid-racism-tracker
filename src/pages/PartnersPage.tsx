import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from '../styles/PartnersPage.module.less';

interface Props {}

export const PartnersPage: React.FC<Props> = () => {
  return (
    <div className={styles.PageWrapper}>
      <Row>
        <Col span={24} className={styles.Title}>
          <h1>For Organizations and Partners</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <body className={styles.SubTitleContent}>
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
              gives you the <em>what</em>, allowing you to give motivations to your <em>why</em>.
            </p>
          </body>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button size="large" className={styles.ActionButton}>
            <a href="https://github.com/CRANE-toolbox" target="_blank" rel="noopener noreferrer" style={{ margin: '0 auto' }}>
              <strong> Download</strong>
            </a>
          </Button>
        </Col>
        <Col>
          <Button size="large" className={styles.ActionButton}>
            <a href="https://forms.gle/HMWqoNXVMoeWokXo7" target="_blank" rel="noopener noreferrer" style={{ margin: '0 auto' }}>
              <strong>Contact</strong>
            </a>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
