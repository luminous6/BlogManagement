import React from 'react';
import styles from './index.less';
import { Form, Input, InputNumber, Button } from 'antd';


export default function index() {
  const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10},
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles[`add-sentence-cmp`]}>
      <h3>添加句子</h3>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'name']} label="名句" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="作者" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
