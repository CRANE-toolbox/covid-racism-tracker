import React from 'react';
import './App.css';
import { BasicChart } from './charts/lineChart';
import { data, areaBumpData } from './resources/data';
import { ChartWithTitle } from './components/ChartWithTitles'
import { CustomResponsiveBump } from './charts/areaBump';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CoBRA</p>
        <p className="App-subtitle">Tracking racism around COVID-19 on Twitter</p>
      </header>
      <ChartWithTitle chart={<BasicChart data={data} />} label="Incidents over period of time" />
      <div className="row">
        <div className="column">
          <ChartWithTitle chart={<CustomResponsiveBump data={areaBumpData} />} label="Some interactive content" />
        </div>
        <div className="column">
          <p>Some big ass text</p>
        </div>
      </div>
    </div>
  );
}

export default App;
