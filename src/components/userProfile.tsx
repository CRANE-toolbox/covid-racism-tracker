import React from 'react';
import styles from '../styles/userProfile.module.less';

interface Props {
  photo: string;
  name: string;
  bio?: string;
  link?: string;
  linkText: string;
  nameStyle?: string;
  bioStyle?: string;
  linkStyle?: string;
}

export const UserProfile: React.FC<Props> = (props: Props) => {
  const { photo, name, bio, link, linkText, nameStyle, bioStyle, linkStyle }: Props = props;
  return (
    <div className={styles.Wrapper}>
      <img src={photo} className={styles.Photo} alt="User profile" />
      <h2 className={nameStyle || styles.Name}>{name}</h2>
      <body className={bioStyle || styles.Bio}>{bio}</body>
      <a className={linkStyle || styles.Link} href={link}>
        {linkText || link}
      </a>
    </div>
  );
};
