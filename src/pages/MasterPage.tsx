import React from 'react';
import { Layout } from 'antd';
import { Header } from '../components/NavHeader';
import styles from '../styles/MasterPage.module.less';
import { HomePage } from './HomePage';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { DataPage } from './DataPage';
import { Page404 } from './404Page';
import { SupportPage } from './SupportPage';
import { PartnersPage } from './PartnersPage';
import { AboutPage } from './AboutPage';
import { MainFooter } from '../components/Footer';
import { Routes } from '../routes';
interface Props {}

//Small function to help render the footer
function renderFooterHelper() {
  return (
    <Layout.Footer className={styles.MasterFooter}>
      <MainFooter />
    </Layout.Footer>
  );
}
/**
 * This component represents the main part of the website. The header, footer, and content
 * are rendered here. Plus, the react router lives here!
 */
export const Main: React.FC<Props> = () => {
  let location = useLocation();
  let history = useHistory();
  return (
    <Layout className={styles.MasterLayout}>
      <Layout.Header className={styles.MenuHeader}>
        <Header />
      </Layout.Header>
      <Layout.Content className={styles.MasterContent}>
        {/* We put a router directly here so that it only has to re-load the contents
        of the page, not the entire thing! 
         */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/data" component={DataPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/partners" component={PartnersPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/redirect/github"
            component={() => {
              window.open('https://github.com/CRANE-toolbox');
              history.goBack();
              return null;
            }}
          />
          <Route
            exact
            path="/redirect/devpost"
            component={() => {
              window.open('https://devpost.com/software/crane-dvkeuf');
              history.goBack();
              return null;
            }}
          />
          <Route
            exact
            path="/redirect/emailus"
            component={() => {
              window.open('https://forms.gle/fPnisqH8j5PgeLpH6');
              history.goBack();
              return null;
            }}
          />

          <Route path="/" component={Page404} />
        </Switch>
      </Layout.Content>
      {/* Don't render the footer on the home page */}
      {location.pathname === Routes.HOME.path ? null : renderFooterHelper()}
    </Layout>
  );
};
