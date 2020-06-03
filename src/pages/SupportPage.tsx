import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import styles from '../styles/SupportPage.module.less';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routes';
interface Props {}
export const SupportPage: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Content>
      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <h1 className={styles.h1}>Hotline Support</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <p>
              To those outraged by the increase in racist narratives
              and hate speech online in the aftermath of the Coronavirus pandemic,
              there are many ways you can support those being affected. There are
              many ways you can help combat the rise of Xenophobia online. From
              online bystander intervention training to donating to antiracist
              organizations, there are many options you can pursue to make your
              voice heard and help targets of online racism.
          </p>
          <p>View the different bystander resources we've collected below!</p>
          <p><strong>+00 6344 9755 85 55</strong></p>
          <p>
              Get Support
              Organizations Willing to Help
          </p>
        </Col>
      </Row>
      <Row justify="center" className={styles.ActionButtonsRow}>
        <Col>
          <Button
            size="large"
            className={styles.ActionButton}
            onClick={() => {
              history.push(Routes.SUPPORT);
            }}
          >
            Get Support
          </Button>
        </Col>
      </Row>
    </Layout.Content>
  );
};
