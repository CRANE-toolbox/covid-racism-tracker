import React from 'react';
import { Row, Col, Space } from 'antd';
import styles from '../styles/AboutPage.module.less';
import gProfile from '../assets/gianluca_profile.png';
import { ReactComponent as Distance } from '../assets/social_distancing.svg';
import { UserProfile } from '../components/userProfile';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
interface Props {}

export const AboutPage: React.FC<Props> = () => {
  const screens = useBreakpoint();
  return (
    <div>
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
      <Row className={styles.AllRow}>
        <Col span={16}>
          <Space size={16} direction="horizontal">
            <h2 className={styles.SubTitle}>What is Sinophobia?</h2>
          </Space>
          <body className={styles.Content}>
            In 2013, Pew Research Center from the United States conducted a survey over Sinophobia, finding that China was viewed favorably in just half (19 of 38) of the nations
            surveyed, excluding China itself. Sinophobia is defined as the consistent hostility toward people of Chinese origin or toward Chinese culture, people, history, or
            government. It is also said to include the fear or dislike of Chinese-made goods.
          </body>
        </Col>
        <Col span={8}>
          <Distance className={styles.SocialDistanceGraphic} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 className={styles.SubTitle}>Sinophobia to Racism to Present Stage:</h2>
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
        <Col span={12}>
          <UserProfile
            photo={gProfile}
            name="Gianluca Stringhini"
            bio="Assistant Professor in the Department of Electrical and Computer Engineering at Boston University, co-directing the Security Lab (SeclaBU)"
            linkText="SEC Lab"
          />
        </Col>
        <Col span={12}>
          <body className={styles.greyText}>
            "In my research I apply a data-driven approach to better understand malicious activity on the Internet.   Through the collection and analysis of large-scale datasets, I
            develop novel and robust mitigation techniques to make the Internet a safer place. My research involves a mix of quantitative analysis, (some) qualitative analysis,
            machine learning, crime science, and systems design. As examples, recently I have been investigating the spread of alternative news and memes on online social networks,
            raids organized by trolls against other Internet users, the evolution of cyberattacks, cyberbullying, ransomware, online dating scams, money laundering schemes linked
            to cybercrime, malware delivery networks, and online social network compromises. My research is supported by the NSF, Google, and Facebook."
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
