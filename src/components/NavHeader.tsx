import React, { useState, useEffect } from 'react';
import { Menu, Popover, Button } from 'antd';
import styles from '../styles/NavHeader.module.less';
import { useHistory, useLocation } from 'react-router-dom';
import { Routes } from '../routes';
import { ReactComponent as Logo } from '../assets/LOGO.svg';
import useThrottle from '@react-hook/throttle';
interface Props {}

/**
 * Top level component for rendering the nav bar with logo and menu
 * CSS hides the logo on widths < 800 along with a mobile menu getting rendered at those sizes
 */
export const Header: React.FC<Props> = () => {
  let history = useHistory();
  const { width } = useViewport();
  const breakpoint = 800;
  return (
    <div className={styles.MenuWrap}>
      <Logo className={styles.Logo} onClick={() => history.push(Routes.HOME.path)} aria-label="Blue CRANE logo" />
      {width < breakpoint ? (
        <div style={{ margin: '0 auto' }}>
          <RenderMobileMenu />
        </div>
      ) : (
        <RenderMenu inline={false} />
      )}
    </div>
  );
};

/**
 * Used to render the mobile menu, this is a popover with the regular menu in
 * inline mode instead of horizontal.
 */
const RenderMobileMenu: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Popover
      content={
        <div onClick={() => setVisible(false)}>
          <RenderMenu inline={true} />
        </div>
      }
      visible={isVisible}
      trigger="click"
    >
      <Button type="primary" onClick={() => setVisible(!isVisible)}>
        Menu
      </Button>
    </Popover>
  );
};
/**
 * A simple hook to watch the viewport size so that we can render a different menu
 * based on the screen size. We use a throttled hook to keep the browser from over-rendering
 */
const useViewport = () => {
  const [width, setWidth] = useThrottle(window.innerWidth, 10);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setWidth]);

  // Return the width so we can use it in our components
  return { width };
};

interface MenuProps {
  inline: boolean;
}
/**
 * A FC to render the menu based on the passed parameter
 * @param props The props for this master menu
 */
const RenderMenu: React.FC<MenuProps> = (props: MenuProps) => {
  const { inline } = props;
  const [selected, setSelected] = useState(['1']);
  let history = useHistory();
  let location = useLocation();
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
    <Menu mode={inline ? 'inline' : 'horizontal'} selectedKeys={selected}>
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
  );
};
