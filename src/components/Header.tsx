import React from 'react';
import { Layout, Menu } from 'antd';
import styles from '../styles/Main.module.less';
import { useHistory } from 'react-router-dom';
interface Props {}

//Menu bar with buttons
export const Header: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Header className={styles.MenuHeader}>
      <Menu className={styles.MenuBar} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item
          key="1"
          className={styles.MenuItem}
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          className={styles.MenuItem}
          onClick={() => {
            history.push('/data');
          }}
        >
          Data
        </Menu.Item>
        <Menu.Item
          key="3"
          className={styles.MenuItem}
          onClick={() => {
            history.push('/support');
          }}
        >
          Support
        </Menu.Item>
        <Menu.Item
          key="4"
          className={styles.MenuItem}
          onClick={() => {
            history.push('/partners');
          }}
        >
          Partners
        </Menu.Item>
        <Menu.Item
          key="5"
          className={styles.MenuItem}
          onClick={() => {
            history.push('/support');
          }}
        >
          About
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
