import React from 'react';
import './App.css';
import { BasicChart } from './charts/lineChart';
import { dataAll, dataChinaChinese, dataKungfluWuflu } from './resources/data';
import { ChartWithTitle } from './components/ChartWithTitles'
import { CustomResponsiveBump } from './charts/areaBump';
import mainImg from './assets/main-photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CoBRA</p>
        <p className="App-subtitle">Tracking racism around COVID-19 on Twitter</p>
      </header>

      <img src={mainImg} id="main-img" alt="Main CoBRa Image" />;

      <section>
        <h2>Evolution of Sinophobic and Anti-Black Hate Speech</h2>
        <ChartWithTitle chart={<BasicChart data={dataAll} />} label="Evolution of the share of sinophobic and anti-black hate speech among Covid19-related tweets in March and April 2020"/>
      </section>

      <section>
        <div className="row">
          <div className="column">
            <ChartWithTitle chart={<CustomResponsiveBump data={dataChinaChinese} />} label="Topics appearing linked to China/Chinese keywords among Covid19-related tweets in March and April 2020"/>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="column">
            <ChartWithTitle chart={<CustomResponsiveBump data={dataKungfluWuflu} />} label="Topics appearing linked to Kungflu/Wuflu keywords among Covid19-related tweets in March and April 2020"/>
          </div>
        </div>
      </section>


      <div className="description">

        <div className="about">
          <h2>About Project Cobra</h2>
          <p>Project Cobra is monitoring real time racist rhetoric on Twitter. There is evidence that online hate speech
          predicts hate crime and human rights groups have argued that exposure to online hate speech normalises such hatred
          for majority groups. We are hoping that tracking the changes in online sinophobic and racist rhetoric resulting from
          the progress of the Covid19 pandemic allows for hard exposure to those uninformed, as well as turn into a tool for
          change within victims and supporting organizations.</p>
        </div>

        <div className="about">
          <h2>What is Sinophobia?</h2>
          <p>In 2013, Pew Research Center from the United States conducted a survey over Sinophobia, finding that China was viewed
          favorably in just half (19 of 38) of the nations surveyed, excluding China itself. Sinophobia is defined as the consistent
          hostility toward people of Chinese origin or toward Chinese culture, people, history, or government. It is also said to
          include the fear or dislike of Chinese-made goods</p>
          <p className="subheader">Sinophobia to Racism to Present Stage:</p>
          <p>Sinophobia and anti-asian speech have always been actively present, as well as other racist speech within social media.
          The COVID-19 not only exposed this hate, but allowed many of us to witness it as we are more than ever stuck in our
          phones. And more than ever, these racist attackers are on their phones as well spreading their words. Racist rhetoric affects
          everyone, from the “normalization” of racist slurs to the immense and disproportionate death rate in black and brown
          communities. Racism is causing more lives in this pandemic, we must expose this data, and urge for change.</p>
        </div>

      </div>


    </div>
  );
}

export default App;
