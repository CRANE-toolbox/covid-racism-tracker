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
      <body>
        Project CRANE is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
        exposure to online hate speech normalises such hatred for majority groups.
      </body>
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
        Project CRANE is monitoring real-time racist rhetoric on Twitter. There is evidence that online hate speech predicts hate crime and human rights groups have argued that
        exposure to online hate speech normalises such hatred for majority groups.
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
