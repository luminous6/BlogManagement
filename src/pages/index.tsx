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
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <Button type="primary">Primary</Button>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <DatePicker onChange={onChange}  />
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
