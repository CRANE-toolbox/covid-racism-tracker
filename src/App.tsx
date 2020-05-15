import React from 'react';
import './App.css';
import { BasicChart } from './charts/lineChart';
import { dataAll, dataChinaChinese, dataKungfluWuflu } from './resources/data';
import { ChartWithTitle } from './components/ChartWithTitles'
import { CustomResponsiveBump } from './charts/areaBump';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CoBRA</p>
        <p className="App-subtitle">Tracking racism around COVID-19 on Twitter</p>
      </header>

      <section>
        <h2>Tweet Topics Relating to China, Chinese, Kungflu, and Wuflu</h2>
        <ChartWithTitle chart={<BasicChart data={dataAll} />} label="Incidents over period of time" />
        <div className="row">
          <div className="column">
            <ChartWithTitle chart={<CustomResponsiveBump data={dataAll} />} label="Some interactive content" />
          </div>
          <div className="column">
            <p>Some big ass text</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Tweet Topics Relating to China & Chinese</h2>
        <ChartWithTitle chart={<BasicChart data={dataChinaChinese} />} label="Incidents over period of time" />
        <div className="row">
          <div className="column">
            <ChartWithTitle chart={<CustomResponsiveBump data={dataChinaChinese} />} label="More interactive content" />
          </div>
          <div className="column">
            <p>Some big ass text</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Tweet Topics Relating to Kungflu & Wuflu</h2>
        <ChartWithTitle chart={<BasicChart data={dataKungfluWuflu} />} label="Incidents over period of time" />
        <div className="row">
          <div className="column">
            <ChartWithTitle chart={<CustomResponsiveBump data={dataKungfluWuflu} />} label="Interactive Area Bump Map" />
          </div>
          <div className="column">
            <p>Some big ass text</p>
          </div>
        </div>
      </section>


      <header className="about">
        <h2>About Project Cobra</h2>
        <p>Project Cobra is monitoring real time racist rhetoric on Twitter. There is evidence that online hate speech
        predicts hate crime and human rights groups have argued that exposure to online hate speech normalises such hatred
        for majority groups. We are hoping that tracking the changes in online sinophobic and racist rhetoric resulting from
        the progress of the Covid19 pandemic allows for hard exposure to those uninformed, as well as turn into a tool for
        change within victims and supporting organizations.</p>
      </header>



    </div>
  );
}

export default App;
