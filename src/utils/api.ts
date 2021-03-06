import { request } from './http';

// 登录
export const userLogin = async (data: any) => {
  const ret = await request('/login', {
    method: 'post',
    data,
  });
  console.log(ret);
  return ret;
};

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
// 新增句子
export const addDailySentence = async (content: string, author: string) => {
  const ret = await request.get(`/addSentence?content=${content}&author=${author}`);
  console.log(ret);
  return ret;
};
// 修改每日一句
export const updatedSentence = async (id: string, content: string, author: string) => {
  const ret = await request.get(`/updateSentence?id=${id}&content=${content}&author=${author}`);
  console.log(ret);
  return ret;
};
