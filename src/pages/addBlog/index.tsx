import React, { useEffect } from 'react';
import style from './index.less';
import { addBlog } from '@/utils/api';
import BlogEditor from '@/components/blogEditor';
export default function index() {
  useEffect(()=> {
    // queryBlog()
    const myDate = new Date();
    const hour = myDate.getHours();
    const min = myDate.getMinutes();
    const sec = myDate.getSeconds();
    // addBlog({
    //   title: `标题 当前时间${hour}:${min}:${sec}`,
    //   content: 'hhhhhhhhhhhhh 博客正文',
    //   tags: '散文，诗集',
    // });
  }, [])

  return (
    <div className={style[`add-blog-page`]}>
      <BlogEditor />
    </div>
  );
}
