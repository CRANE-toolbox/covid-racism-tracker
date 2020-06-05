import React from 'react';
import { SinglePersonImg, DuelPersonImg, DoubleOrbImg } from '../assets/assets.index';
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
      <Icon />
      <div className={styles.CardTitle}>{title}</div>
      <body className={styles.CardBody}>{body}</body>
      <a href={link} className={styles.CardLink}>
        {linkText}
      </a>
    </div>
  );
};

export const CardIcon = {
  PERSON: SinglePersonImg,
  DUELPERSON: DuelPersonImg,
  ORB: DoubleOrbImg,
} as const;
