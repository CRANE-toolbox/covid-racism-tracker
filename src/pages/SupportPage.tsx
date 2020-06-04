import React from 'react';
import { Row, Col, Layout, Button, Table } from 'antd';
import { dataSource, columns } from '../resources/organizationData';
import styles from '../styles/SupportPage.module.less';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routes';
interface Props {}

export const SupportPage: React.FC<Props> = () => {
  let history = useHistory();
  return (
    <Layout.Content>

      <div className={styles.SupportContainer}>
        <Row>
          <Col span={24} className={styles.Title}>
            <h1>Support</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <body className={styles.SubTitleContent}>
              Below are resources for those directly and indirectly affected by the
              rise in Xenophobia in the aftermath of the Coronavirus pandemic. Whether
              you are a victim of online harassment and racism, or you are a concerned
              citizen wanting to help, the resources can help you take hold of your
              agency and fight back against the rise in online hate speech.
            </body>
          </Col>
        </Row>
      </div>

      <div className={styles.SupportContainer}>
        <Row justify="center">
          <Col span={24} className={styles.Title}>
            <h1>Who can help me?</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <body className={styles.SubTitleContent}>
            <p>
            If you have been a target of hate speech, racism, and/or xenophobia
            online or in-person following the Coronavirus pandemic, you are not
            alone. Many are being harassed in response to COVID-19 based off their
            ethnicity and race. Below are a list of resouces, including hotlines,
            virtual support systems, and outreach groups.
            </p>
            <p>If you are in immediate danger, <strong>please call 911</strong>.</p>
            </body>
          </Col>
        </Row>
        <Row justify="center" className={styles.ActionButtonsRow}>
          <Col>
            <Button
              size="large"
              autoFocus={true}
              className={styles.ActionButton}
              onClick={() => {
                history.push(Routes.DATA);
              }}
            >
              Call 911 now
            </Button>
          </Col>
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
      </div>


      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <h1 className={styles.h1}>Survivor Resources</h1>
        </Col>
      </Row>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Victim Connect</p>
          <p className={styles.ResourceContent}>
            The VictimConnect Resource Center is a referral helpline
            where crime victims can learn about their rights and options confidentially
            and compassionately. They have a webpage full for resources for survivors
            of hate crimes.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Campaign Zero</p>
          <p className={styles.ResourceContent}>
            Campaign Zero is a digital activist group fighting against police brutality.
            Funds donated to Campaign Zero support the analysis of policing practices
            across the country, research to identify effective solutions to end police
            violence, technical assistance to organizers leading police accountability
            campaigns and the development of model legislation and advocacy to end
            police violence nationwide.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Asian American Toolkit</p>
          <p className={styles.ResourceContent}>
            This toolkit represents the work and thinking of 15 grassroots organizations
            with Asian American bases living in the most precarious margins of power.
            All of the modules are designed to begin with people’s lived experiences,
            and to build structural awareness of why those experiences are happening,
            and how they are tied to the oppression of others.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Stand Against Hatred Tracker</p>
          <p className={styles.ResourceContent}>
            Asian Americans Advancing Justice (AAJC) has created a digital tracker
            to show how many Asian Americans are being affected by hate speech and
            racism. Tell your story, track the hate.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>AAPI Emergency Response network</p>
          <p className={styles.ResourceContent}>
            The AAPI Emergency Response Network (ERN), born out of a collaboration
            between the National Council of Asian Pacific Americans (NCAPA) and
            other non-profit groups, is a compilation of resources on health, hate
            incidents, small business, and more specifically for the Asian American,
            Native Hawaiian, and Pacific Islander communities.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
      </Row>



      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <p>

            You can find more resources to help those affected by racism, hate
            speech, and xenophobia here.
          </p>
        </Col>
      </Row>



      <div className={styles.SupportContainer}>
        <Row>
          <Col span={24} className={styles.Title}>
            <h1>How can I help?</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <body className={styles.SubTitleContent}>
              To those outraged by the increase in racist narratives
              and hate speech online in the aftermath of the Coronavirus pandemic,
              there are many ways you can support those being affected. There are
              many ways you can help combat the rise of Xenophobia online. From
              online bystander intervention training to donating to antiracist
              organizations, there are many options you can pursue to make your
              voice heard and help targets of online racism.

              <p>View the different bystander resources we've collected below!</p>
            </body>
          </Col>
        </Row>
      </div>


      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <h1 className={styles.h1}>Bystander Resources</h1>
        </Col>
      </Row>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Bystander Intervention Training</p>
          <p className={styles.ResourceContent}>
            In response to the rise in Anti-Asian/American and xenophobic harassment,
            Hollaback! has partnered with Asian Americans Advancing Justice (AAJC)
            to adapt their free bystander intervention and de-escalation training.
          </p>
          <p className={styles.ResourceContent}>Hert Mob</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>Campaign Zero</p>
          <p className={styles.ResourceContent}>
            We’re fighting fire with water, and working step by step to assist victims,
            educate communities, and stop harassment online. HeartMob aims to be the
            place where those facing harassment can easily report abuse across social
            networks and find support from others who know what they're going through.
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
        <Col className={styles.ResourceBox}>
          <p className={styles.ResourceTitle}>SafeHorizon</p>
          <p className={styles.ResourceContent}>
            Learn how to help survivors of hate crime. When we as a society become
            more aware of the rise in hate speech and the resouces available, we can
            help those being targered. Stay informed! Safe Horizon outlines the dimensions
            of hate speech and what concerned supporters should know!
          </p>
          <p className={styles.ResourceContent}>Learn More</p>
        </Col>
      </Row>


      <Table dataSource={dataSource} columns={columns} bordered={false}/>;

    </Layout.Content>
  );
};
