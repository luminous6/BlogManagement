import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Table, Tag, Button, Modal, message, Spin } from 'antd';
import { getRandomColor } from '@/utils/util';

export default function index(props: any) {
  const [visible, setVisible] = useState<boolean>(false);
  let { blogData } = props;
  useEffect(() => {
    if (JSON.stringify(blogData) === '{}') {
      setVisible(false);
    } else {
      setVisible(true);
    }
    console.log(blogData);
  }, [props]);
  return (
    <div className={styles[`view-blog-cmp`]}>
      <Modal
        width={1000}
        title="博客详情"
        centered
        visible={visible}
        onOk={() => {
          setVisible(false);
          blogData = {};
        }}
        onCancel={() => {
          setVisible(false);
          blogData = {};

        }}
      >
        <h3 className={styles.title}>{blogData.title}</h3>
        <div className="tags">
          标签：
          {blogData.tags &&
            blogData.tags.map((item: any, index: number) => (
              <Tag color={getRandomColor()}>{item}</Tag>
            ))}
        </div>
        <div className={styles.info}>发布时间：{blogData.pushtime}</div>
        <div className={styles.info}>更新时间：{blogData.updatetime || '无'}</div>
        {/* <div className={styles.info}>点赞数量：{blogData.like || '0'}</div>
        <div className={styles.info}>评论数量：{blogData.comment_num || '0'}</div>
        <div className={styles.info}>博客ID：{blogData.id}</div> */}
        <div dangerouslySetInnerHTML={{__html: blogData.content}}></div>
      </Modal>
    </div>
  );
}
