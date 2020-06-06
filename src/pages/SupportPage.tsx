import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from '../styles/SupportPage.module.less';
import { ResourceCard, CardIcon } from '../components/ResourceCard';

interface Props {}

export const SupportPage: React.FC<Props> = () => {
  return (
    <div>
      <div className={styles.SupportContainer}>
        <Row>
          <Col span={24} className={styles.Title}>
            <h1>Support</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <body className={styles.SubTitleContent}>
              Below are resources for those directly and indirectly affected by the rise in Xenophobia in the aftermath of the Coronavirus pandemic. Whether you are a victim of
              online harassment and racism, or you are a concerned citizen wanting to help, the resources can help you take hold of your agency and fight back against the rise in
              online hate speech.
            </body>
          </Col>
        </Row>
      </div>

      <div className={styles.HelpSection}>
        <div className={styles.SupportContainer}>
          <Row justify="center">
            <Col span={24} className={styles.Title}>
              <h1 className={styles.HelpSubtitle}>Who can help me?</h1>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={styles.HelpContent}>
                <p>
                  If you have been a target of hate speech, racism, and/or xenophobia online or in-person following the Coronavirus pandemic, you are not alone. Many are being
                  harassed in response to COVID-19 based off their ethnicity and race. Below are a list of resouces, including hotlines, virtual support systems, and outreach
                  groups.
                </p>
                <p>
                  If you are in immediate danger, <strong>please contact your local emergency services</strong>.
                </p>
              </div>
            </Col>
          </Row>

          <Row justify="center" className={styles.ActionButtonsRow}>
            <Col>
              <Button size="large" className={styles.ActionButtonLeft}>
                <a href="https://victimconnect.org/learn/types-of-crime/hate-crimes/" target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto' }}>
                  Get Support Now
                </a>
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      <Row justify="center">
        <Col className={styles.SupportPageColumnContent}>
          <h1 className={styles.h1}>Survivor Resources</h1>
        </Col>
      </Row>

      <Row className={styles.FlexRow}>
        <Col>
          <ResourceCard
            Icon={CardIcon.FIST}
            body="The VictimConnect Resource Center is a referral helpline where crime victims can learn about their rights and options confidentially and compassionately. They have a webpage full for resources for survivors of hate crimes."
            title="VICTIM CONNECT"
            linkText="Learn More"
            link="https://victimconnect.org/learn/types-of-crime/hate-crimes/"
            aria-label="Raised Fist Empowerment Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.FIST}
            body="Campaign Zero is a digital activist group fighting against police brutality. Funds donated to Campaign Zero support the analysis of policing practices across the country, research to identify effective solutions to end police violence, technical assistance to organizers
            leading police accountability campaigns and the development of model legislation and advocacy to end police violence nationwide."
            title="CAMPAIGN ZERO"
            linkText="Learn More"
            link="https://www.joincampaignzero.org/#vision"
            aria-label="Raised Fist Empowerment Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.TOOLBOX}
            body="This toolkit represents the work and thinking of 15 grassroots organizations with Asian American bases living in the most precarious margins of power. All of the modules are designed to begin with people’s
             lived experiences, and to build structural awareness of why those experiences are happening, and how they are tied to the oppression of others."
            title="ASIAN AMERICAN TOOLKIT"
            linkText="Learn More"
            link="https://www.asianamtoolkit.org/"
            aria-label="Toolkit Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.STATS}
            body="Asian Americans Advancing Justice (AAJC) has created a digital tracker to show how many Asian Americans are being affected by hate speech and racism. Tell your story, track the hate."
            title="STAND AGAINST HATRED TRACKER"
            linkText="Learn More"
            link="https://www.standagainsthatred.org/"
            aria-label="Graph Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.FIRSTAID}
            body="The AAPI Emergency Response Network (ERN), born out of a collaboration between the National Council of Asian Pacific Americans (NCAPA) and other non-profit groups, is a compilation of resources on health,
             hate incidents, small business, and more specifically for the Asian American, Native Hawaiian, and Pacific Islander communities."
            title="AAPI EMERGENCY RESPONSE NETWORK"
            linkText="Learn More"
            link="https://www.aapiern.org/"
            aria-label="First-Aid Kit Icon"
          />
        </Col>
      </Row>

      <Row justify="center" className={styles.MoreResources}>
        <Col>
          <p className={styles.HighSectionText}>
            You can find more resources to help those affected by racism, hate speech, and xenophobia{' '}
            <a href="https://advancingjustice-aajc.org/covid19" className={styles.HereLink} target="_blank" rel="noreferrer noopener">
              here
            </a>
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
              <p>
                To those outraged by the increase in racist narratives and hate speech online in the aftermath of the Coronavirus pandemic, there are many ways you can support
                those being affected. There are many ways you can help combat the rise of Xenophobia online. From online bystander intervention training to donating to antiracist
                organizations, there are many options you can pursue to make your voice heard and help targets of online racism.
              </p>
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
      <Row className={styles.FlexRow}>
        <Col>
          <ResourceCard
            Icon={CardIcon.HANDSTOGETHER}
            body="In response to the rise in Anti-Asian/American and xenophobic harassment, Hollaback!
            has partnered with Asian Americans Advancing Justice (AAJC) to adapt their free bystander intervention and de-escalation training."
            title="BYSTANDER INTERVENTION TRAINING"
            linkText="Learn More"
            aria-label="Hands Together Empowerment Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.HEART}
            body="We’re fighting fire with water, and working step by step to assist victims, educate communities, and stop harassment online. HeartMob aims to be the place where
            those facing harassment can easily report abuse across social networks and find support from others who know what they're going through "
            title="HEART MOB"
            linkText="Learn More"
            aria-label="Hand with a heart Icon"
          />
        </Col>
        <Col>
          <ResourceCard
            Icon={CardIcon.SAFEHORIZON}
            body="Learn how to SA survivors of hate crime. When we as a society become more aware of the rise in hate speech and the resources available,
            we can help those being targeted. Stay informed! Safe Horizon outlines the dimensions of hate speech and what concerned supporters should know!"
            title="SAFE HORIZON"
            linkText="Learn More"
            aria-label="Photo of the Horizon Icon"
          />
        </Col>
      </Row>
      <div style={{ marginBottom: '3rem' }} />
      <div className={styles.CreditText}>Icons made by Freepik from www.flaticon.com</div>
    </div>
  );
};
