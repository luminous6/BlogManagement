import { request } from './http';

export const queryBlog = async () => {
  const ret = await request.get('/queryAllBlog');
  console.log(ret)
  return ret;
};
