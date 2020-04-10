import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Input, Button, Space, message } from 'antd';
import { addDailySentence } from '@/utils/api';

export default function index() {
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('匿名');

  const handleClickSubmit = async () => {
    if (content === '') {
      message.warning('新增的句子不能为空！');
      return;
    }
    const ret = await addDailySentence(content, author);
    if (ret.status === 200) {
      message.success('上传句子成功！');
      setContent('');
      setAuthor('');
    } else {
      message.error('上传句子失败！');
    }
  };
  return (
    <div className={styles[`add-sentence-cmp`]}>
      <h3>添加句子</h3>
      <Space size="large">
        <div>
          <span>句子：</span>
          <Input
            onChange={(val: any) => {
              setContent(val.target.value);
            }}
            style={{ width: '500px' }}
            placeholder="今天也是元气满满的一天"
          ></Input>
        </div>

        <div>
          <span>作者：</span>
          <Input
            onChange={(val: any) => {
              setAuthor(val.target.value);
            }}
            style={{ width: '150px' }}
            placeholder="匿名"
          ></Input>
        </div>

        <Button type="primary" onClick={handleClickSubmit}>
          上传
        </Button>
      </Space>
    </div>
  );
}
