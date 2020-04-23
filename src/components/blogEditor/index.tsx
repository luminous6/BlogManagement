import React, { useState, useEffect } from 'react';
import styles from './style.less';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Divider, Button, message, Input } from 'antd';
import { addBlog } from '@/utils/api';
import { removeLocalStorageItem } from '@/utils/util';

export default function index(props: any) {
  const [blogTitle, setBlogTitle] = useState<string>('');
  const [editorBlog, setEditorBlog] = useState<any>('');
  const [tags, setTags] = useState<string>('');
  useEffect(() => {
    //
    console.log(window.location);
    const tempData = localStorage.getItem('blogTempData')
      ? JSON.parse(localStorage.getItem('blogTempData') || '')
      : '';
    if (tempData) {
      console.log('获取缓存博客', tempData);
      setBlogTitle(tempData.title);
      setTags(tempData.tags);
      setEditorBlog(BraftEditor.createEditorState(tempData.content));
    }
  }, []);

  // const
  const getURLparams = () => {
    const url = new URL(window.location.href);

  }
  const handleEditorChange = (e: any) => {
    setEditorBlog(e);
  };
  const submitContent = () => {
    console.log(editorBlog);
  };

  // 提交按钮
  const submitBlog = async () => {
    if (!blogTitle) {
      message.error('请输入博客标题！');
      return;
    }
    if (!editorBlog) {
      message.error('请输入博客内容！');
      return;
    }
    const data = {
      title: blogTitle,
      tags: tags || '无',
      content: editorBlog.toHTML(),
    };
    console.log('添加博客', data);
    const res = await addBlog(data);
    message.success(res.message);
    removeLocalStorageItem('blogTempData');
  };

  // 博客暂存
  const handleClickCache = () => {
    const tempData = {
      title: blogTitle,
      tags: tags,
      content: editorBlog.toHTML(),
    };
    removeLocalStorageItem('blogTempData');
    localStorage.setItem('blogTempData', JSON.stringify(tempData));
  };

  return (
    <div className={styles.blogEditor}>
      <div className={styles.titleWap}>
        <div className={styles.titleBox}>
          <h3>博客标题：</h3>
          <Input
            placeholder="请输入博客标题"
            value={blogTitle}
            onChange={(e: any) => setBlogTitle(e.target.value)}
          />
        </div>
        <div className={styles.tagsBox}>
          <h3>标签：</h3>
          <Input
            placeholder="请输入标签，用 ' ，' 隔开"
            value={tags}
            onChange={(e: any) => setTags(e.target.value)}
          />
        </div>
      </div>

      <div>博客编辑</div>

      <BraftEditor value={editorBlog} onChange={handleEditorChange} onSave={submitContent} />
      <Divider />

      <div className={styles.btnBox}>
        <Button type="primary" onClick={handleClickCache}>
          暂存
        </Button>{' '}
        <Button onClick={submitBlog} type="primary">
          上传
        </Button>
      </div>
    </div>
  );
}
