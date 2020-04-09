import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Table, Tag, Button, Modal, message, Spin, Form, Input, InputNumber } from 'antd';
import { queryAllDailySentence, delSentenceById } from '@/utils/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
export default function index() {
  const [sentenceData, setSentenceData] = useState([]);
  const [visible, setVisible] = useState<boolean>(false);
  // 修改句子时的数据
  const [tempSentence, setTempSentence] = useState<any>({});
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '句子',
      dataIndex: 'content',
      key: 'content',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '发布时间',
      dataIndex: 'pushtime',
      key: 'pushtime',
      render: (arg: any) => {
        return <span>{arg}</span>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              setVisible(true);
              setTempSentence(null);
              setTempSentence(text);
            }}
          >
            编辑
          </Button>{' '}
          <Button
            onClick={() => handleClickDelSentence(text.id)}
            size="small"
            danger
            type="primary"
          >
            删除
          </Button>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      content: 'John Brown',
      comment: 32,
      pushtime: '1578971728431',
    },
    {
      key: '2',
      content: 'Jim Green',
      comment: 42,
      pushtime: '1578971958366',
    },
    {
      key: '3',
      content: 'Joe Black',
      comment: 32,
      pushtime: '1578986918928',
    },
  ];
  useEffect(() => {
    fetchData();
  }, []);

  // 请求数据
  const fetchData = async () => {
    const res = await queryAllDailySentence();
    setSentenceData(res.data);
  };
  // 删除句子
  const handleClickDelSentence = (id: string | number) => {
    confirm({
      title: 'Are you sure delete this Sentence?',
      icon: <ExclamationCircleOutlined />,
      content: 'Delete after unable to restore!',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        delSentenceById(id).then(res => {
          if (res.status === 200) {
            message.success('删除句子成功！');
            const temp = sentenceData.filter((item: any, index: number) => item.id !== id);
            setSentenceData(temp);
          } else {
            message.error('删除句子失败！');
          }
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  // 确认修改
  const handleClickModification = () => {};
  const handleClickCancel = () => {
    setVisible(false);
  };

  return (
    <div className={styles[`daily-sentence-page`]}>
      <div>
        <Table columns={columns} dataSource={sentenceData} />
      </div>

      <div>
        <Modal
          title="修改每日一句"
          visible={visible}
          onOk={handleClickModification}
          onCancel={handleClickCancel}
          okText="提交修改"
          cancelText="取消"
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            name="nest-messages"
            // onFinish={onFinish}
            // validateMessages={validateMessages}
          >
            <Form.Item label="内容" required>
              <Input
                defaultValue={tempSentence.content ? tempSentence.content : ''}
                value={tempSentence.content}
              />
            </Form.Item>
            <Form.Item label="作者">
              <Input
                defaultValue={tempSentence.author ? tempSentence.author : ''}
                value={tempSentence.author}
                onChange={()=> {
                  console.log(tempSentence.author);
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}