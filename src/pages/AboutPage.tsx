import React from 'react';
import { Row, Col, Space } from 'antd';
import styles from '../styles/AboutPage.module.less';
import testPrpfile from '../assets/logo192.png';
import { ReactComponent as Distance } from '../assets/social_distancing.svg';
import { UserProfile } from '../components/userProfile';
import { MemberProfile } from '../components/teamMember';
import { ianProfile, gianlucaProfile, cameliaProfile, rachaelProfile } from '../assets/assets.index';
interface Props {}

export const AboutPage: React.FC<Props> = () => {
  return (
    <div>
      <Row>
        <Col span={24} className={styles.Title}>
          <h1>About Project CoBRa</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <body className={styles.SubTitleContent}>
            With COVID-19 causing a global pandemic, fear and panic increased, but so did the direct racist and discriminatory sentiment targeted towards the Chinese race, culture,
            and country, also known as Sinophobia. Unfortunately, this emergence of racist sentiment is not a new feature in society, but with the current global health crisis,
            articles, interactions, and overall rhetoric has proved to be inherently targeted towards the Chinese race. It is critical to understand how situations of mass hysteria
            and global crises can increase not just Sinophobic, but xenophobic sentiment.
          </body>
        </Col>
      </Row>
      <Row className={styles.AllRow}>
        <Col sm={24} md={12} lg={16}>
          <Space size={16} direction="horizontal">
            <h2 className={styles.SubTitle}>What is Sinophobia?</h2>
          </Space>
          <body className={styles.Content}>
            In 2013, Pew Research Center from the United States conducted a survey over Sinophobia, finding that China was viewed favorably in just half (19 of 38) of the nations
            surveyed, excluding China itself. Sinophobia is defined as the consistent hostility toward people of Chinese origin or toward Chinese culture, people, history, or
            government. It is also said to include the fear or dislike of Chinese-made goods.
          </body>
        </Col>
        <Col sm={24} md={12} lg={8}>
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
        <UserProfile
          photo={gianlucaProfile}
          name="Gianluca Stringhini"
          bio="Assistant Professor in the Department of Electrical and Computer Engineering at Boston University, co-directing the Security Lab (SeclaBU)"
          linkText="SEC Lab"
        />
        <body className={styles.AboutProfileInfo}>
          <div> "In my research I apply a data-driven approach to better understand malicious activity on the Internet. </div>
          <br />
          <div>
            Through the collection and analysis of large-scale datasets, I develop novel and robust mitigation techniques to make the Internet a safer place. My research involves a
            mix of quantitative analysis, (some) qualitative analysis, machine learning, crime science, and systems design.
          </div>
          <br />
          <div>
            As examples, recently I have been investigating the spread of alternative news and memes on online social networks, raids organized by trolls against other Internet
            users, the evolution of cyberattacks, cyberbullying, ransomware, online dating scams, money laundering schemes linked to cybercrime, malware delivery networks, and
            online social network compromises.
          </div>
          <br />
          <div>My research is supported by the NSF, Google, and Facebook."</div>
        </body>
      </Row>
      <Row>
        <Col span={24}>
          <h1 className={styles.MidTitle}>Team</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <body className={styles.SubTitleContent}>
            LasProin consectetur tempus lectus, sit amet fermentum ante tempor ut. Ut ullamcorper nunc tellus, non auctor ligula commodo sed. Curabitur elit diam, consequat at
            pretium ut, aliquam eget lorem. Nam eget ligula ac tellus cursus elementum eget id magna.
          </body>
        </Col>
      </Row>
      <div style={{ padding: '45px', margin: '0 auto' }} />
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Row gutter={[25, 25]}>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech" bio="Ian still needs to write his bio.." photo={ianProfile} />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Camelia B" position="UI/UX" bio="This is a bio a longerlongerlonger bio you say yes this is a longer bioooooooooo" photo={cameliaProfile} />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile
              name="Rachael Dier"
              position="UX Researcher/Designer & Content Strategist"
              bio="This is a bio a longer bio you say yes this is a longer bioooooooooo"
              photo={rachaelProfile}
            />
          </Col>

          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile
              name="Svetlana M"
              position="UI/UX"
              bio="Passionate about learning and teaching, UX UI designer, linguist, copywriter and translator"
              photo={testPrpfile}
            />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech Dude" bio="This is a bio a longersay yes this is a longer bioooooooooo" photo={testPrpfile} />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech Dude" bio="This is a bio a longer bio you say yes this is a longer bioooooooooo" photo={testPrpfile} />
          </Col>

          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech Dude" bio="This is a bio a longer bio you say yes this is a longer bioooooooooo" photo={testPrpfile} />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech Dude" bio="This is a bio a longer bi this is a longer bioooooooooo" photo={testPrpfile} />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow}>
            <MemberProfile name="Ian Saucy" position="Tech Dude" bio="This is a bio a longer bio you say yes this is a longer bioooooooooo" photo={testPrpfile} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
