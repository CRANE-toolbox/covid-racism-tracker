import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import styles from '../styles/NavHeader.module.less';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routes';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
interface Props {}

//Menu bar with buttons
export const Header: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Header className={styles.MenuHeader}>
      <Row align="top">
        <Col>
          <Logo className={styles.Logo} onClick={() => history.push(Routes.HOME)} />
        </Col>
        <Col className={styles.MenuCol}>
          <Menu className={styles.MenuBar} mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.HOME);
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="2"
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.ABOUT);
              }}
            >
              About
            </Menu.Item>
            <Menu.Item
              key="3"
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.DATA);
              }}
            >
              Data
            </Menu.Item>
            <Menu.Item
              key="4"
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.SUPPORT);
              }}
            >
              Support
            </Menu.Item>
            <Menu.Item
              key="5"
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.PARTNERS);
              }}
            >
              Partners
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  );
};
