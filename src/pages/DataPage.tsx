import React from 'react';
import { GraphPreview, GraphType } from '../components/graphPreview';
import { COLORS } from '../styles/colors';

interface Props {}

export const DataPage: React.FC<Props> = () => {
  return (
    <>
      <GraphPreview title="Test Title" GraphicType={GraphType.FLOW} graph={<div></div>} hoverColor={COLORS.dark_blue} hoverText="Longer Hover text explaining the graph" />
    </>
  );
};
