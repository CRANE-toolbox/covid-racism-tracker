import React from 'react';
import { Button } from 'antd';
import styles from './Main.module.less';

export const HomePage = () => {
  return (
    <div>
      <Button type="primary" className={styles.homePage}>
        Test Button
      </Button>
    </div>
  );
};
