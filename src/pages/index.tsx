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
      <ul className={styles.list}>
        <Button type="primary">Primary </Button>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <DatePicker onChange={onChange}  />
      </ul>
    </div>
  );
}
