import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.less';
import { queryBlog } from '@/utils/api';
import { Table, Tag, Button } from 'antd';
import { getRandomColor, transformTime } from '@/utils/util';
export default function index() {
  const [blogData, setBlogData] = useState([]);
  const columns = [
    {
      title: '博客标题',
      dataIndex: 'title',
      key: 'title',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '评论数量',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: '写作时间',
      dataIndex: 'pushtime',
      key: 'pushtime',
      render: (arg: any) => {
        return <span>{arg}</span>;
      },
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <span>
          <Tag color={getRandomColor()} key={tags}>
            {tags}
          </Tag>
          {/* {tags.map((tag: any) => {
            return (
              <Tag color={getRandomColor()} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })} */}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <Button size="small" type="primary">
            编辑
          </Button>{' '}
          <Button size="small" danger type="primary">
            删除
          </Button>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      title: 'John Brown',
      comment: 32,
      pushtime: '1578971728431',
      tags: ['js', 'node'],
    },
    {
      key: '2',
      title: 'Jim Green',
      comment: 42,
      pushtime: '1578971958366',
      tags: ['散文'],
    },
    {
      key: '3',
      title: 'Joe Black',
      comment: 32,
      pushtime: '1578986918928',
      tags: ['诗集', '创作'],
    },
  ];
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const ret = await queryBlog();
    setBlogData(ret.data);
  };
  return (
    <div className={styles[`view-blog-page`]}>
      {console.log('fuck', blogData)}
      <Table columns={columns} dataSource={blogData} />
    </div>
  );
}
