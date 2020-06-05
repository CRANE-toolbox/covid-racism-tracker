import React, { useState, useEffect } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import styles from '../styles/NavHeader.module.less';
import { useHistory, useLocation } from 'react-router-dom';
import { Routes } from '../routes';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
interface Props {}

// const getRoute: {path: string, key: number} = () => {
//   let values = Object.keys(Routes).map(key => console.log(key))
//   Object.keys(Routes)
//   return( )
// }

//Menu bar with buttons
export const Header: React.FC<Props> = () => {
  let history = useHistory();
  let location = useLocation();
  const [selected, setSelected] = useState(['1']);
  useEffect(() => {
    /**
     * Super ugly bit of code to parse out the current path and update the selected menu item.
     * The only reason this is needed is to update the selected menu item when directly navigating(ie inputting the path directly)
     * A better way would be to parse this our somehow vs this massive if statement because clearly this fails when a new path is added
     * but due to time restrictions this is what we got.
     *
     * Ideally this would also remove the need to updating the state in the Menu.Item as well but it does not -- something to do with the rendering order and when this effect is called.
     */
    if (location.pathname === Routes.HOME.path) {
      setSelected([`${Routes.HOME.key}`]);
    } else if (location.pathname === Routes.ABOUT.path) {
      setSelected([`${Routes.ABOUT.key}`]);
    } else if (location.pathname === Routes.DATA.path) {
      setSelected([`${Routes.DATA.key}`]);
    } else if (location.pathname === Routes.SUPPORT.path) {
      setSelected([`${Routes.SUPPORT.key}`]);
    } else if (location.pathname === Routes.PARTNERS.path) {
      setSelected([`${Routes.PARTNERS.key}`]);
    }
  }, [location.pathname]);
  return (
    <Layout.Header className={styles.MenuHeader}>
      <Row align="top">
        <Col>
          <Logo className={styles.Logo} onClick={() => history.push(Routes.HOME.path)} />
        </Col>
        <Col className={styles.MenuCol}>
          <Menu className={styles.MenuBar} mode="horizontal" selectedKeys={selected}>
            <Menu.Item
              key={Routes.HOME.key}
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.HOME.path);
                setSelected([`${Routes.HOME.key}`]);
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key={Routes.ABOUT.key}
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.ABOUT.path);
                setSelected([`${Routes.ABOUT.key}`]);
              }}
            >
              About
            </Menu.Item>
            <Menu.Item
              key={Routes.DATA.key}
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.DATA.path);
                setSelected([`${Routes.DATA.key}`]);
              }}
            >
              Data
            </Menu.Item>
            <Menu.Item
              key={Routes.SUPPORT.key}
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.SUPPORT.path);
                setSelected([`${Routes.SUPPORT.key}`]);
              }}
            >
              Support
            </Menu.Item>
            <Menu.Item
              key={Routes.PARTNERS.key}
              className={styles.MenuItem}
              onClick={() => {
                history.push(Routes.PARTNERS.path);
                setSelected([`${Routes.PARTNERS.key}`]);
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
