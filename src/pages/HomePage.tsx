import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/Main.module.less';
import { TwitterCircleFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
interface Props {}
export const HomePage: React.FC<Props> = () => {
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.MainColumnContent}>
          <h1 className={styles.h1}>Tracking Racism Around COVID-19 on Twitter</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.MainColumnContent}>
          <p>
            Project NAME is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
            exposure to online hate speech normalizes such hatred for majority groups.
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.MainActionButtonsRow}>
        <Col>
          <Button size="large" autoFocus={true} className={styles.MainActionButton}>
            See Data
          </Button>
        </Col>
        <Col>
          <Button size="large" className={styles.MainActionButton}>
            Get Support
          </Button>
        </Col>
      </Row>
      <Row justify="center" className={styles.MainSocialIconsRow}>
        <Col>
          <TwitterCircleFilled style={{ fontSize: '48px' }} className={styles.MainSocialIcons} />
        </Col>
        <Col>
          <LinkedinFilled style={{ fontSize: '48px' }} className={styles.MainSocialIcons} />
        </Col>
        <Col>
          <MailFilled style={{ fontSize: '48px' }} className={styles.MainSocialIcons} />
        </Col>
      </Row>
    </Layout.Content>
  );
};
