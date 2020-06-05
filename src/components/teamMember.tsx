import React from 'react';
import styles from '../styles/teamMember.module.less';

interface Props {
  name: string;
  position: string;
  bio: string;
  photo: string;
}

export const MemberProfile: React.FC<Props> = (props: Props) => {
  const { name, position, bio, photo } = props;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box}>
        <img src={photo} alt="Profile of team member" className={styles.Photo} />
        <div className={styles.Name}>{name}</div>
        <div className={styles.Position}>{position}</div>
        <div className={styles.Bio}>{bio}</div>
      </div>
    </div>
  );
};
