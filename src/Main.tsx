import React from 'react';
import { Layout, Menu, Row, Col, Button } from 'antd';
import { TwitterCircleFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';

import styles from './Main.module.less';

export const HomePage = () => {
  return (
    <Layout className={styles.MainLayout}>
      <Layout.Header className={styles.MenuHeader}>
        <Menu className={styles.MenuBar} mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" className={styles.customClass}>
            Data
          </Menu.Item>
          <Menu.Item key="2" className={styles.MenuItem}>
            Support
          </Menu.Item>
          <Menu.Item key="3" className={styles.MenuItem}>
            Partners
          </Menu.Item>
          <Menu.Item key="4" className={styles.MenuItem}>
            About
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content className={styles.MainContent}>
        <Row justify="center">
          <Col className={styles.MainColumnContent}>
            <h1 className={styles.h1}>Tracking Racism Around COVID-19 on Twitter</h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col className={styles.MainColumnContent}>
            <p>
              Project NAME is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued
              that exposure to online hate speech normalizes such hatred for majority groups.
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
    </Layout>
  );
};
