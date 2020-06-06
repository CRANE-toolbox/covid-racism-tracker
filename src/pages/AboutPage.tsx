import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import styles from '../styles/AboutPage.module.less';
import { ReactComponent as Distance } from '../assets/social_distancing.svg';
import { UserProfile } from '../components/userProfile';
import { MemberProfile } from '../components/teamMember';
import { ianProfile, gianlucaProfile, cameliaProfile, rachaelProfile, svetlanaProfile, linaProfile, kellyProfile, emmaProfile } from '../assets/assets.index';
import { useHistory } from 'react-router-dom';
import { ExternalRoutes } from '../routes';
interface Props {}
/**
 * The about page for the website. All items embedded statically
 */
export const AboutPage: React.FC<Props> = () => {
  //We use this to be able to utilize the react router in this component
  let history = useHistory();
  return (
    <div className={styles.PageWrapper}>
      <Row>
        <Col span={24} className={styles.Title}>
          <h1>About Project CRANE</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <body className={styles.SubTitleContent}>
            Project CRANE is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
            exposure to online hate speech normalises such hatred for majority groups. We are hoping that tracking the changes in online sinophobic and racist rhetoric resulting
            from the progress of the COVID-19 pandemic allows for hard exposure to those uninformed, as well as turn into a tool for change within victims and supporting
            organizations.
          </body>
        </Col>
      </Row>
      <Row className={styles.AllRow}>
        <Col sm={24} md={12} lg={16}>
          <Space size={16} direction="horizontal">
            <h2 className={styles.SubTitle}>What is Sinophobia?</h2>
          </Space>
          <body className={styles.Content}>
            In 2013, Pew Research Center from the United States conducted a survey over sinophobia, finding that China was viewed favorably in just half (19 of 38) of the nations
            surveyed, excluding China itself. Sinophobia is defined as the consistent hostility toward people of Chinese origin or toward Chinese culture, people, history, or
            government. It is also said to include the fear or dislike of Chinese-made goods.
          </body>
        </Col>
        <Col sm={24} md={12} lg={8}>
          <Distance className={styles.SocialDistanceGraphic} aria-label="Social Distance Graphic of 3 individuals outdoors with face masks" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h2 className={styles.SubTitle}>Sinophobia to Racism to Present Stage:</h2>
          <body>
            Sinophobia and anti-Asian speech have always been actively present, as well as other racist speech within social media. The COVID-19 not only exposed this hate, but
            allowed many of us to witness it as we are more than ever stuck in our phones. And more than ever, these racist attackers are on their phones as well spreading their
            words. Racist rhetoric affects everyone, from the “normalization” of racist slurs to the immense and disproportionate death rate in black and brown communities. Racism
            is causing more lives in this pandemic, we must expose this data, and urge for change.
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
          link="https://seclab.bu.edu/people/gianluca/"
          aria-label="Gianluca Stringhini Profile Photo"
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
      <Row justify="center">
        <Col span={24} className={styles.TeamContentSection}>
          <div>
            <body className={styles.SubTitleContent}>
              Our team came together through the Resiliency Challenge Hackathon, in which students around the world came together for a nine-week, virtual hackathon, with
              three-week sprint challenges aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the
              coronavirus pandemic.
            </body>
            <br />
            <body className={styles.SubTitleContent}>To learn more about our team and the hackathon, check out our Devpost page!</body>
            <Button className={styles.DevpostButton} onClick={() => history.push(ExternalRoutes.DEVPOST)}>
              Devpost Page
            </Button>
          </div>
        </Col>
      </Row>
      <div style={{ padding: '2rem', margin: '0 auto' }} />
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <Row gutter={[25, 25]}>
          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Ian Saucy"
              position="Web Design and Data analysis"
              bio="Aspiring Software Engineer with an interest in linguistics, NLP and ML"
              photo={ianProfile}
              aria-label="Ian Saucy Profile Photo"
            />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Camelia B"
              position="UI/UX"
              bio="Worked on UX Research, Branding and Logo Design, Content Copy"
              photo={cameliaProfile}
              aria-label="Camelia B Profile Photo"
            />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Rachael Dier"
              position="UX Researcher/Designer"
              bio="I worked on and oversaw UX/UI research and design"
              photo={rachaelProfile}
              aria-label="Rachael Dier Profile Photo"
            />
          </Col>

          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Svetlana M"
              position="UI/UX"
              bio="Passionate about learning & teaching, UX UI designer, linguist and  copywriter"
              photo={svetlanaProfile}
              aria-label="Svetlana M Profile Photo"
            />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile name="Lina Hayek" position="Design Consultant" bio="Design & Communication Strategy" photo={linaProfile} aria-label="Lina Hayek Profile Photo" />
          </Col>

          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Kelly Ly"
              position="Undergraduate Programmer & Researcher"
              bio="I worked on data collection, data analysis, website styling, and video editing"
              photo={kellyProfile}
              aria-label="Kelly Ly Profile Photo"
            />
          </Col>
          <Col flex={1.66} className={styles.TeamProfileRow} order={randProfileOrder()}>
            <MemberProfile
              name="Emma Barme"
              position="Computer Science Research & Implementation"
              bio="Literature review, data preprocessing, quantitative and qualitative analysis"
              photo={emmaProfile}
              aria-label="Emma Barme Profile Photo"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
/**
 * A silly function to randomly order the profiles. Returns a random int that is used
 * by the columns to choose their order
 */
function randProfileOrder(): number {
  return Math.floor(Math.random() * Math.floor(25));
}
