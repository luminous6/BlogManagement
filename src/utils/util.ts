// 获取随机颜色
export const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return 'rgba(' + r + ',' + g + ',' + b + ',0.7)';
};

// 时间戳转换
export const transformTime = (time: any = +new Date()): string => {
  const date = new Date(time + 8 * 3600 * 1000);
  return date
    .toJSON()
    .substr(0, 19)
    .replace('T', ' ')
    .replace(/-/g, '.');
};
