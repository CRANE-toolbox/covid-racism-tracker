import React from 'react';
import { Layout, Row, Col } from 'antd';
import styles from '../styles/Footer.module.less';
import { LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
interface Props {}

export const MainFooter: React.FC<Props> = () => {
  return (
    <Layout className={styles.FooterStyle}>
      <Row className={styles.FooterRow}>
        <Col className={styles.FooterText}></Col>
        <Col className={styles.FooterText}>
          Disclaimer: the information on this website is for educational purposes
          only. Users' privacy is our utmost concern. No identifiable information
          has been made public.
        </Col>
        <Col className={styles.FooterLogos}>
          <TwitterOutlined className={styles.FooterSocialIcons} />
          <LinkedinOutlined className={styles.FooterSocialIcons} />
          <MailOutlined className={styles.FooterSocialIcons} />
        </Col>
      </Row>
    </Layout>
  );
};
