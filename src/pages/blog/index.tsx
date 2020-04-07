import React, { useEffect } from 'react';
import style from './index.less';
import { queryBlog } from '@/utils/api';
export default function index() {

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
