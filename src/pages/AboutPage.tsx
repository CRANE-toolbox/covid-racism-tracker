import React from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/AboutPage.module.less';
import image from '../assets/about_img.png';
interface Props {}
export const AboutPage: React.FC<Props> = () => {
  return (
    <div className={styles.AllRow}>
      <Row>
        <Col span={24} className={styles.Title}>
          <h1>About Project CoBRa</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          With COVID-19 causing a global pandemic, fear and panic increased, but so did the direct racist and discriminatory sentiment targeted towards the Chinese race, culture,
          and country, also known as Sinophobia. Unfortunately, this emergence of racist sentiment is not a new feature in society, but with the current global health crisis,
          articles, interactions, and overall rhetoric has proved to be inherently targeted towards the Chinese race. It is critical to understand how situations of mass hysteria
          and global crises can increase not just Sinophobic, but xenophobic sentiment.
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <h2>What is Sinophobia?</h2>
          <body>
            In 2013, Pew Research Center from the United States conducted a survey over Sinophobia, finding that China was viewed favorably in just half (19 of 38) of the nations
            surveyed, excluding China itself. Sinophobia is defined as the consistent hostility toward people of Chinese origin or toward Chinese culture, people, history, or
            government. It is also said to include the fear or dislike of Chinese-made goods.
          </body>
        </Col>
        <Col span={8}>
          <img src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2>Sinophobia to Racism to Present Stage:</h2>
          <body>
            Sinophobia and anti-Asian speech have always been actively present, as well as other racist speech within social media. The COVID-19 not only exposed this hate but
            allowed many of us to witness it as we are more than ever stuck in our phones. And more than ever, these racist attackers are on their phones as well spreading their
            words. Racist rhetoric affects everyone, from the “normalization” of racist slurs to the immense and disproportionate death rate in black and brown communities. Racism
            is causing more lives to be lost in this pandemic from hate crimes-we must expose this data and urge for change. Here’s how you can help:
          </body>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1 className={styles.MidTitle}>Original Research</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>Profile of Gianluca</Col>
        <Col span={12}>
          <body className={styles.greyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis scelerisque, dapibus ante at, aliquam sem. Ut luctus, velit nec molestie varius, dui leo
            convallis tellus, et ultricies ex tellus nec nisi. Mauris viverra egestas tortor nec scelerisque. Nam sed elit dapibus, posuere risus ac, ullamcorper leo. Ut a ligula
            malesuada, vestibulum eros consequat, euismod nibh.
          </body>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1 className={styles.MidTitle}>Team</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <body>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis scelerisque, dapibus ante at, aliquam sem. Ut luctus, velit nec molestie varius, dui leo
            convallis tellus, et ultricies ex tellus nec nisi.
          </body>
        </Col>
      </Row>
    </div>
  );
};
