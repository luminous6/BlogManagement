import React, { useEffect } from 'react';
import style from './index.less';
import { queryBlog, addBlog } from '@/utils/api';
export default function index() {
  useEffect(()=> {
    // queryBlog()
    const myDate = new Date();
    const hour = myDate.getHours();
    const min = myDate.getMinutes();
    const sec = myDate.getSeconds();
    addBlog({
      title: `标题 当前时间${hour}:${min}:${sec}`,
      content: 'hhhhhhhhhhhhh 博客正文',
      tags: '散文，诗集',
    });
  }, [])

  return (
    <div className={style[`add-blog-page`]}>
      博客管理
      <div className={style.test}>
        测试红色
        <span className={style.text}>测试红色</span>
      </div>
    </div>
  );
}
