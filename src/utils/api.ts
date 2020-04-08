import { request } from './http';

export const queryBlog = async () => {
  const ret = await request.get('/queryAllBlog');
  console.log(ret)
  return ret;
};
export const addBlog = async (data: any) => {
  const ret = await request('/addBlog', {
    method: 'post',
    data,
  });
  console.log(ret);

  return ret;
}
