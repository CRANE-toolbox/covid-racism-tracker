import React from 'react';
import './App.css';
import { BasicChart, TopicLineChart } from './charts/lineChart';
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
} from './resources/data';
import { ChartWithTitle } from './components/ChartWithTitles';
import { CustomResponsiveBump } from './charts/areaBump';
import mainImg from './assets/main-photo.jpg';
import { Button } from 'antd';

const App = () => {
  return (
    <div>
      <section>
        <h2 id="all-graphs-title">Frequency of sinophobic slurs on Twitter</h2>
        <ChartWithTitle chart={<BasicChart data={dataSlurs} />} label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>} />
        <ChartWithTitle chart={<BasicChart data={dataSlursByWeek} />} label={<div>Weekly evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>} />
        <p>
          Clear decrease in the use of "chinazi". Slight increase in the use of "chink" and "gook". Two periods with higher use of "chingchong/ching chong/ching-chong", in January
          and in the second half of March (coincidates with Trump's discourse on the "Chinese virus").
        </p>
      </section>
      <div className="App">
        <header className="App-header">
          <p>CoBRA</p>
          <p className="App-subtitle">Tracking racism around COVID-19 on Twitter</p>
        </header>

        <section>
          <h2 id="all-graphs-title">Newly identified sinophobic slurs</h2>
          <p>
            By looking at words that appear in similar context to common sinophobic slurs (<i>Chink</i> and <i>Chinaman</i>), wa have identified two words as potential new
            sinophobic terms:
          </p>
          <ul>
            <li>
              <i>Coronachan</i> could come from the name of the virus and the Japanese suffix -chan for girls
            </li>
            <li>
              <i>Beak</i> could refer to the exagerated kissing shape one can make with their mouth, that appears to be popular for selfies in some young asian communities (needs
              checking)
            </li>
          </ul>
        </section>

        <section>
          <h2 id="all-graphs-title">Topics appearing in conjunction to specific keywords</h2>
          For each keyword, rank and volume of the topics present in the 40 closest words, for each month from November 2019 to April 2020. Analysis performed on a random sample of
          tweets obtained through Twitter Streaming API.
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicVirus} />}
                label={
                  <div>
                    Topics appearing linked to <i>Virus</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicCovid} />}
                label={
                  <div>
                    Topics appearing linked to <i>Covid</i> (February to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicWuflu} />}
                label={
                  <div>
                    Topics appearing linked to <i>Wuflu</i> (January to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicKungflu} />}
                label={
                  <div>
                    Topics appearing linked to <i>Kungflu</i> (March to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicChina} />}
                label={
                  <div>
                    Topics appearing linked to <i>China</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicChinese} />}
                label={
                  <div>
                    Topics appearing linked to <i>Chinese</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicWuhan} />}
                label={
                  <div>
                    Topics appearing linked to <i>Wuhan</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicCoronavirus} />}
                label={
                  <div>
                    Topics appearing linked to <i>Coronavirus</i> (January to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<CustomResponsiveBump data={dataTopicInfecting} />}
                label={
                  <div>
                    Topics appearing linked to <i>Infecting</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <p>
            We have tested several others keywords for which we thought we might see an apparition or increase of anti-asian topics. None of the following keywords (main associated
            topics in parentheses) appeared frequently in similar context to words denoting sinophobia:
          </p>
          <ul>
            <li>Asian (Nationality or ethnicity, Gender and sexual orientation, Sexual activities)</li>
            <li>Asia (Names of countries or continents)</li>
            <li>Country (Names of countries or continents, Politics)</li>
            <li>Immigrant (Immigration-related, Crime-related, Ethnicity, Socio-economics, Systemic oppression)</li>
            <li>Immigrants (Immigration-related, Crime-related, Ethnicity, Socio-economics, Systemic oppression)</li>
            <li>Immigration (Immigration-related, Legislation, Politics)</li>
            <li>Quarantine (Animals, Medical terms, China-related, Alternative names for covid19, Living in quarantine)</li>
            <li>Disease (Names of diseases, Description of diseases)</li>
            <li>Infection (Names of diseases, Description of diseases, Other medical terms)</li>
          </ul>
        </section>

        <section>
          <h2 id="all-graphs-title">Topics appearing in conjunction to specific keywords - Aggregation</h2>
          For each topic, percentage of the 40 closest words to each of the selected keywords, for each month from November 2019 to April 2020. Analysis performed on a random
          sample of tweets obtained through Twitter Streaming API.
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<TopicLineChart data={dataAggregateChinaChineseWuhan} />}
                label={
                  <div>
                    Coverage of prevalent topics in the words linked to <i>China</i>, <i>Chinese</i> or <i>Wuhan</i> (November 2019 to April 2020).
                  </div>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ChartWithTitle
                chart={<TopicLineChart data={dataAggregateKungFluWuflu} />}
                label={
                  <div>
                    Coverage of prevalent topics in the words linked to <i>Kunglu</i> or <i>Wuflu</i> (January to April 2020).
                  </div>
                }
              />
            </div>
          </div>
        </section>

        <div className="description">
          <div className="about">
            <h2>About Project CoBRa</h2>
            <p>
              Project CoBRa is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued
              that exposure to online hate speech normalises such hatred for majority groups. We are hoping that tracking the changes in online sinophobic and racist rhetoric
              resulting from the progress of the COVID-19 pandemic allows for hard exposure to those uninformed, as well as turn into a tool for change within victims and
              supporting organizations.
            </p>
          </div>

          <div className="about">
            <h2>What is Sinophobia?</h2>
            <p>
              In 2013, Pew Research Center from the United States conducted a survey over sinophobia, finding that China was viewed favorably in just half (19 of 38) of the nations
              surveyed, excluding China itself. Sinophobia is defined as the consistent hostility toward people of Chinese origin or toward Chinese culture, people, history, or
              government. It is also said to include the fear or dislike of Chinese-made goods
            </p>
            <p className="subheader">Sinophobia to Racism to Present Stage:</p>
            <p>
              Sinophobia and anti-Asian speech have always been actively present, as well as other racist speech within social media. The COVID-19 not only exposed this hate, but
              allowed many of us to witness it as we are more than ever stuck in our phones. And more than ever, these racist attackers are on their phones as well spreading their
              words. Racist rhetoric affects everyone, from the “normalization” of racist slurs to the immense and disproportionate death rate in black and brown communities.
              Racism is causing more lives in this pandemic, we must expose this data, and urge for change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
