import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/HomePage.module.less';
import { useHistory } from 'react-router-dom';
import { Routes, ExternalRoutes } from '../routes';
import { CircleEmail, DevPost, Github } from '../assets/assets.index';
interface Props {}
export const HomePage: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.HomePageBanner}>
          <p className={styles.HomePageBannerContent}>
            This website was created as part of the <a href="https://theresiliencychallenge.devpost.com/">Resiliency Challenge hackathon.</a> The data analyses presented here are
            an example use-case for the <a href="">CRANE Python package</a> we are developing as a continuation to the Resiliency challenge. Please visit our
            <a href="https://github.com/CRANE-toolbox"> Github repository</a> for more information.
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <h1 className={styles.h1}>Tracking Racism Around COVID-19 on Twitter</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.HomePageColumnContent}>
          <p>
            Project CRANE is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
            exposure to online hate speech normalizes such hatred for majority groups.
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button
            size="large"
            className={styles.ActionButtonData}
            onClick={() => {
              history.push(Routes.DATA.path);
            }}
          >
            See Data
          </Button>
        </Col>
        <Col>
          <Button
            size="large"
            className={styles.ActionButtonSupport}
            onClick={() => {
              history.push(Routes.SUPPORT.path);
            }}
          >
            Get Support
          </Button>
        </Col>
      </Row>
      <div style={{ paddingTop: '3rem' }} />
      <Row justify="center" className={styles.SocialIconsRow}>
        <Col className={styles.HomeSocialIcons}>
          <CircleEmail onClick={() => history.push(ExternalRoutes.EMAILUS, null)} />
        </Col>
        <Col className={styles.HomeSocialIcons}>
          <DevPost onClick={() => history.push(ExternalRoutes.DEVPOST, null)} />
        </Col>
        <Col className={styles.HomeSocialIcons}>
          <Github onClick={() => history.push(ExternalRoutes.GITHUB)} />
        </Col>
      </Row>
    </Layout.Content>
  );
};
