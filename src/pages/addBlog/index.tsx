import React, { useEffect } from 'react';
import style from './index.less';
import { queryBlog, addBlog } from '@/utils/api';
export default function index() {
  useEffect(()=> {
    // queryBlog()
    // addBlog({
    //   title: '哈哈哈标题',
    //   content: 'hhhhhhhhhhhhh 博客正文',
    //   tags: '散文，诗集'
    // })
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
