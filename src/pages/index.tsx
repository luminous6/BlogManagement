import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Button, Checkbox, DatePicker } from 'antd';
export default function() {
  const onChange = () => {
    console.log(123);
  }
  return (
    <div className={styles.normal}>
      <h2>今天也是元气满满的一天</h2>

    </div>
  );
}
