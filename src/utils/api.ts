import { request } from './http';

// 查询博客
export const queryBlog = async () => {
  const ret = await request.get('/queryAllBlog');
  console.log(ret);
  return ret;
};

// 添加博客
export const addBlog = async (data: any) => {
  const ret = await request('/addBlog', {
    method: 'post',
    data,
  });
  console.log(ret);
  return ret;
};

// 删除博客
export const delBlogById = async (id: string | number) => {
  const ret = await request.get(`/delBlogById?id=${id}`);
  console.log(ret);
  return ret;
};

// 查询每日一句
export const queryAllDailySentence = async () => {
  const ret = await request.get('/queryAllSentence');
  console.log(ret);
  return ret;
};
// 删除句子
export const delSentenceById = async (id: string | number) => {
  const ret = await request.get(`/delSentenceById?id=${id}`);
  console.log(ret);
  return ret;
};
