import React, { useState } from 'react';
import { GraphPreview, GraphType } from '../components/graphPreview';
import { COLORS } from '../styles/colors';
import { ChartWithTitle } from '../components/ChartWithTitles';
import { BasicChart, TopicLineChart } from '../charts/lineChart';
import { CustomResponsiveBump } from '../charts/areaBump';

import {
  dataSlurs,
  dataSlursByWeek,
  dataTopicWuflu,
  dataTopicChina,
  dataTopicWuhan,
  dataTopicCovid,
  dataTopicVirus,
  dataTopicKungflu,
  dataTopicChinese,
  dataTopicCoronavirus,
  dataTopicInfecting,
  dataAggregateChinaChineseWuhan,
  dataAggregateKungFluWuflu,
} from '../resources/data';
import { Row, Col } from 'antd';
import styles from '../styles/DataPage.module.less';
import { isChrome, isChromium, isFirefox, isMobile } from 'react-device-detect';
import Modal from 'antd/lib/modal/Modal';

interface Props {}

/**
 * This is a warning dialog that we display to the user if they're on an
 * un-supported browser.
 */

const WarningModal = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <Modal visible={isVisible} title="Browser Warning" closable={true} centered={true} onCancel={() => setVisible(false)} footer={null}>
      <body>For the best experience browsing these graphs we recommend using a Chrome or Firefox based browser on a desktop computer. </body>{' '}
      <body> There are known bugs when rendering the graphs for Safari based browsers, we hope to fix these in the future!</body>
      {/* We set the state now that the component has been rendered */}
      {setVisited()}
    </Modal>
  );
};
/**
 * Two functions to help with setting the local storage.
 * Enables us to only display the warning modal a single time
 */

function hasVisited(): boolean {
  let visited: boolean = localStorage['hasVisited'];
  return visited;
}

function setVisited() {
  localStorage['hasVisited'] = true;
}

/**
 * Main content of this page
 */
export const DataPage: React.FC<Props> = () => {
  return (
    <div className={styles.PageWrapper}>
      {/* Super ugly boolean expression to check if the user using a mobile device and or a non chrome or safari based browser */}
      {(!(isChrome || isChromium || isFirefox) || isMobile) && !hasVisited() ? <WarningModal /> : null}
      <h1>Frequency of Sinophobic Slurs on Twitter</h1>
      <body>
        <p>Project CRANE computes the daily and weekly frequencies of several known sinophobic slurs in a dataset representative of real-time Twitter data.</p>
        <p>
          <strong>Select a tile to view the analysis</strong>
        </p>
      </body>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col>
          <GraphPreview
            title="Daily"
            GraphicType={GraphType.LINE}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily frequencies of sinophobic slurs (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Daily frequencies of four common and two rare sinophobic slurs. Despite the noisiness of the daily data and the missing time points, we can see a clear decrease in the use of "chinazi" and a slight increase in the use of "chink" and "gook". Two periods show an increase in the use of "chingchong" and its variants: January and the second half of March.'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Daily frequencies of sinophobic slurs"
            aria-label="Graph of Daily frequencies of sinophobic slurs (November 2019 to April 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Weekly"
            GraphicType={GraphType.LINE}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlursByWeek} />}
                width="100%"
                centerTitle={true}
                label={<div>Weekly frequencies of sinophobic slurs (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Weekly frequencies of four common and two rare sinophobic slurs. Despite the missing time points, we can see a clear decrease in the use of "chinazi" and a slight increase in the use of "chink" and "gook". Two periods show an increase in the use of "chingchong" and its variants: January and the second half of March.'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Weekly frequencies of sinophobic slurs"
            aria-label="Graph of Weekly frequencies of sinophobic slurs (November 2019 to April 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="How is CRANE computing the frequency of sinophobic slurs?"
            displayCTA={true}
            title="Methods"
            textContent={
              'The dataset contains dated tweets. For each tweet, the text is searched for each slur in the provided list. Counts are aggregated by day (respectively week) then divided by the dataset total number of tweets from that day (resp. week) to obtain the frequency. This analysis is run in Python.'
            }
            hoverColor={COLORS.light_green}
            hoverText="More on research methods"
            aria-label="More on research methods: How is CRANE computing the frequency of sinophobic slurs?"
          />
        </Col>
      </Row>
      <h1> Topics Linked to Specific Key Words </h1>
      <body>
        Project CRANE uses a word embedding algorithm to identify the words linked to a given keyword, for a given period of time. For each keyword, forty words are extracted: they
        are those used in a context the most similar to that of the given keyword. It reproduces this analysis for several keywords (related to China, Covid19, and otherness) and
        for each month from Nov 2019 to Dec 2020.
      </body>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col>
          <GraphPreview
            title="Virus"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicVirus} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Virus</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Virus during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Virus"
            aria-label="Graph of Topics appearing linked to Virus (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Covid"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicCovid} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Covid</i> (Feb - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Covid during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Covid"
            aria-label="Graph of Topics appearing linked to Covid (Feb - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Wuflu"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicWuflu} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Wuflu</i> (Jan - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Wuflu during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Wuflu"
            aria-label="Graph of Topics appearing linked to Wuflu (Jan - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Kungflu"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicKungflu} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Kungflu</i> (Mar - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Kungflu during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Kungflu"
            aria-label="Graph of Topics appearing linked to Kungflu (Mar - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="China"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicChina} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>China</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to China during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to China"
            aria-label="Graph of Topics appearing linked to China (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Chinese"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicChinese} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Chinese</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Chinese during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Chinese"
            aria-label="Graph of Topics appearing linked to Chinese (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Wuhan"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicWuhan} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Wuhan</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Wuhan during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Wuhan"
            aria-label="Graph of Topics appearing linked to Wuhan (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Coronavirus"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicCoronavirus} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Coronavirus</i> (Jan - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Coronavirus during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Coronavirus"
            aria-label="Graph of Topics appearing linked to Coronavirus (Jan - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Infecting"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicInfecting} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Infecting</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={
              'Using a word embedding algorithm, the forty words closest to Infecting during each month were extracted. They were topic coded by our team and this graph show the evolution in volume and ranking of each topic over time.'
            }
            hoverColor={COLORS.light_violet}
            hoverText="Topics appearing linked to Infecting"
            aria-label="Graph of Topics appearing linked to Infecting (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="China, Chinese, Wuhan"
            GraphicType={GraphType.LINE}
            graph={
              <ChartWithTitle
                chart={<TopicLineChart data={dataAggregateChinaChineseWuhan} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>China</i>, <i>Chinese</i>, or <i>Wuhan</i> (Nov 2019 - Apr 2020)
                  </div>
                }
              />
            }
            textContent={'This graph shows the aggregate of the topics found through word embedding, linked to China-related keywords: China, Chinese, or Wuhan.'}
            hoverColor={COLORS.dark_blue}
            hoverText="Topics appearing linked to China, Chinese, or Wuhan"
            aria-label="Graph of Topics appearing linked to China, Chinse, or Wuhan (Nov 2019 - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            title="Wuflu, Kungflu"
            GraphicType={GraphType.LINE}
            graph={
              <ChartWithTitle
                chart={<TopicLineChart data={dataAggregateKungFluWuflu} />}
                width="100%"
                centerTitle={true}
                label={
                  <div>
                    Topics appearing linked to <i>Wuflu</i> or <i>Kunflu</i> (Jan - Apr 2020)
                  </div>
                }
              />
            }
            textContent={'This graph shows the aggregate of the topics found through word embedding, linked to sinophobic alternative names to Covid19: Wuflu or Kungflu.'}
            hoverColor={COLORS.dark_blue}
            hoverText="Topics appearing linked to Wuflu or Kungflu"
            aria-label="Graph of Topics appearing linked to Wuflu or Kungfly (Jan - Apr 2020)"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="Newly identified slurs, linked to Chink and Chinaman"
            title="New slurs?"
            textContent={
              'Using a word embedding algorithm, the forty words closest to Chink and to Chinaman, two frequent sinophobic slurs, were extracted for each month. They contained only slurs and derogative terms, hence we did not code them for topics. From those words, two appeared unusual: Coronachan and Beak. We hypothesise that Coronachan is a construction from coronavirus and -chan, the Japanese suffix for girls. Beak might refer to the exaggerated kissing shape one can make with their mouth, that appears to be popular for selfies in some young asian communities.'
            }
            hoverColor={COLORS.violet}
            hoverText="Newly identified slurs"
            aria-label="Description/Discussion of Newly identified slurs, linked to Chink and Chinaman"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="Keywords not linked to sinophobic topics"
            title="Negative results"
            textContent={
              'Using a word embedding algorithm, we extracted and topic coded the forty words closest to several other keywords we expected to see linked to sinophobia. For those keywords no word was interpreted as sinophobia. We give the list of those words, and corresponding topics, here: Asian (Nationality or ethnicity, Gender and sexual orientation, Sexual activities); Asia (Names of countries or continents); Country (Names of countries or continents, Politics); Immigrant (Immigration-related, Crime-related, Ethnicity, Socio-economics, Systemic oppression); Immigrants (Immigration-related, Crime-related, Ethnicity, Socio-economics, Systemic oppression); Immigration (Immigration-related, Legislation, Politics); Quarantine (Animals, Medical terms, China-related, Alternative names for covid19, Living in quarantine); Disease (Names of diseases, Description of diseases); Infection (Names of diseases, Description of diseases, Other medical terms).'
            }
            hoverColor={COLORS.orange}
            hoverText="Keywords not linked to sinophobic topics"
            aria-label="Description/Discussion of Negative Results: Keywords not linked to sinophobic topics"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="How is CRANE computing evolution of topics linked to specific keywords?"
            title="Methods"
            displayCTA={true}
            textContent={
              'The dataset is split into monthly datasets. Each monthly dataset is used to train a word embedding model through the word2vec algorithm. A list of keywords is provided to all the models. For each keyword, forty words are extracted: they are those used in a context the most similar to that of the given keyword. The words are then topic coded by humans. This analysis is run in Python (preprocessing) and C (word2vec).'
            }
            hoverColor={COLORS.light_green}
            hoverText="More on research methods"
            aria-label="Description/Discussion of How is CRANE computing evolution of topics linked to specific keywords?"
          />
        </Col>
      </Row>

      <Row className={styles.UserResearchWrapper}>
        <Col span={24} className={styles.Title}>
          <h1>User Research Sample Q&A</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className={styles.UserResearchSection}>
            <div className={styles.UserResearchSubsection}>
              <p>
                Before designing this website, our team has conducted preliminary user research, specifically ethnographic interviews and online surveys, to gain a better
                understanding of the public’s perception of COVID-19 related hate speech, racism, and xenophobia/sinophobia. By reaching out to stakeholders, we ensured that our
                results will support anti-racist actions and provided them with the necessary contextual information. In addition to this, we have conducted user testing around
                accessibility issues, including but not limited to responsiveness, readability and color contrasts.
              </p>
              <p>Below are examples of anonymous testimonials we collected during our interviews!</p>
            </div>
            <div className={styles.UserResearchSubsection}>
              <p>
                <strong>
                  Q: How has COVID-19 made an impact in your life? (This can be regarding anything: education, earnings, living, mental health, how you spend your day, etc.)
                </strong>
              </p>
              <p>
                A: Disconnect from physical expressions of love for family and friends, loss of spontaneity, loss of community wide entertainment, the virus has victimized us;
                physically, financially, socially, emotionally, and spiritually.
              </p>
            </div>
            <div className={styles.UserResearchSubsection}>
              <p>
                <strong>
                  Q: Have you seen individuals be targeted based on their identity with the rise of the pandemic? If so, if you are comfortable doing so, can you indicate to what
                  extent targeting has had on these individuals?
                </strong>
              </p>
              <p>
                A: I have not witnessed this personally, but I live in a fairly homogeneous community. I can see and grieve for the additional burden on black men, in particular,
                for wearing masks. I can see “essential workers” are expected to turn up at low paying, high risk jobs -- many of these are people of color.
              </p>
            </div>
            <div className={styles.UserResearchSubsection}>
              <p>
                <strong>
                  Q: If there were a webpage to document the spread of racist rhetoric related to the COVID-19 pandemic, what characteristics do you think would be needed in order
                  for the tool to be beneficial/purposeful?
                </strong>
              </p>
              <p>
                A: If there’s a pattern of misassigned blame, correcting that factually is useful. Other than that, sites that already track hate could include COVID-19
                considerations
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
