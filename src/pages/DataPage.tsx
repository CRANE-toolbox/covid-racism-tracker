import React from 'react';
import { GraphPreview, GraphType } from '../components/graphPreview';
import { COLORS } from '../styles/colors';
import { ChartWithTitle } from '../components/ChartWithTitles';
import { BasicChart } from '../charts/lineChart';
import { dataSlurs } from '../resources/data';
import { Row, Col } from 'antd';
import styles from '../styles/DataPage.module.less';

interface Props {}

export const DataPage: React.FC<Props> = () => {
  return (
    <>
      <h1>Frequency of Sinophobic Slurs on Twitter</h1>
      <body>Project CRANE computes the daily and weekly frequencies of several known sinophobic slurs in a dataset representative of real-time Twitter data.</body>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
      </Row>
      <h1> Topics Linked to Specific Key Words </h1>
      <body>
        Project CRANE uses a word embedding algorithm to identify the words linked to a given keyword, for a given period of time. It reproduces this analysis for several keywords
        (related to China, Covid19, and otherness) and for each month from Nov 2019 to Dec 2020.
      </body>
      <Row gutter={[65, 65]} className={styles.FreqRow}>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
        <Col>
          <GraphPreview
            modalTitle="This is a title of the modal"
            title="Frequency on Twitter Twitter Twitter"
            GraphicType={GraphType.FLOW}
            graph={
              <ChartWithTitle
                chart={<BasicChart data={dataSlurs} />}
                width="100%"
                centerTitle={true}
                label={<div>Daily evolution of Sinophobic Slurs Frequency on Twitter (November 2019 to April 2020)</div>}
              />
            }
            textContent={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sodales leo. Cras faucibus tempus justo sed congue. Curabitur consectetur felis auctor, efficitur magna nec, feugiat urna. Suspendisse egestas elementum leo, a convallis purus condimentum quis. Etiam vitae nisi ac ante'
            }
            hoverColor={COLORS.dark_blue}
            hoverText="Longer Hover text explaining the graph"
          />
        </Col>
      </Row>
    </>
  );
};
