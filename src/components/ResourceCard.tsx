import React from 'react';
import { FirstAidImg, FistImg, HandTogetherImg, HeartMobImg, SafeHorizonImg, ChartStatsImg, ToolBoxImg } from '../assets/assets.index';
import styles from '../styles/ResourceCard.module.less';

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  title: string;
  body: string;
  linkText?: string;
  link?: string;
}
export const ResourceCard: React.FC<Props> = (props: Props) => {
  const { Icon, title, body, linkText, link } = props;
  return (
    <div className={styles.CardStyle}>
      <Icon className={styles.CardIcon} />
      <div className={styles.CardTitle}>{title}</div>
      <body className={styles.CardBody}>{body}</body>
      <a href={link} className={styles.CardLink}>
        {linkText}
      </a>
    </div>
  );
};

/**
 * These are the icons types that can be used by this component.
 */
export const CardIcon = {
  FIRSTAID: FirstAidImg,
  FIST: FistImg,
  HANDSTOGETHER: HandTogetherImg,
  HEART: HeartMobImg,
  SAFEHORIZON: SafeHorizonImg,
  STATS: ChartStatsImg,
  TOOLBOX: ToolBoxImg,
} as const;
