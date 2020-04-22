import React from 'react';
import styles from './style.less';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { userLogin } from '@/utils/api';
import router from 'umi/router';
import { saveToken } from '@/utils/util';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const login = async (loginData: any) => {
  const res = await userLogin(loginData);
  if (res.status === 200) {
    message.success('登录成功！');
    saveToken(res);
    setTimeout(() => {
      router.push('/');
    }, 500);
  } else {
    message.error(`登录失败, ${res.data}！`);
  }
};

const Demo = () => {
  const onFinish = (values: any) => {
    login(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default function index() {
  return (
    <div className={styles[`login-page`]}>
      <div>
        {' '}
        <Demo />
      </div>
    </div>
  );
}
