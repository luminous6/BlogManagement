import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Table, Tag, Button, Modal, message, Spin, Form, Input } from 'antd';
import { queryAllDailySentence, delSentenceById, updatedSentence } from '@/utils/api';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AddSentence from '@/components/addSentence';
const { confirm } = Modal;
export default function index() {
  const [sentenceData, setSentenceData] = useState([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [loadding, setLoading] = useState<boolean>(true);
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
              setTempSentence(text);
              console.log('temp ', tempSentence);
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
    if(!res) return;
    try {
      setSentenceData(res.data);
    } catch (error) {
      throw error;
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
    // setLoading(false);
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
  const handleClickModification = () => {
    console.log(tempSentence);
    if (tempSentence.content === '') {
      return message.warn('句子不能为空');
    }
    updatedSentence(tempSentence.id, tempSentence.content, tempSentence.author || '匿名').then(
      (res: any) => {
        if (res.status === 200) {
          message.success('修改句子成功');
          setVisible(false);
        } else {
          message.error('修改句子失败');
        }
      },
    );
  };
  const handleClickCancel = () => {
    setVisible(false);
  };

  return (
    <div className={styles[`daily-sentence-page`]}>
      {/* 添加句子 */}
      <div className={styles[`add-sentence-wrap`]}>
        {' '}
        <AddSentence />
      </div>
      {/* 表格 */}
      <div>
        <div style={{ display: loadding ? 'block' : 'none' }} className={styles.loading}>
          <Spin size="large" />
        </div>
        <Table
          style={{ display: loadding ? 'none' : 'block' }}
          columns={columns}
          dataSource={sentenceData}
          rowKey={record => record.id}
        />
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
          句子：
          <Input
            defaultValue={tempSentence.content}
            onChange={val => {
              setTempSentence(Object.assign(tempSentence, { content: val.target.value }));
            }}
          />
          作者：
          <Input
            defaultValue={tempSentence.author}
            onChange={val => {
              setTempSentence(Object.assign(tempSentence, { author: val.target.value }));
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
