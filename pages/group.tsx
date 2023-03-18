import { Button, Form, Input, Space, InputNumber, TimePicker, Checkbox} from 'antd';
import React, { useState } from 'react';
import styles from '../styles/party.module.css';
import axios from 'axios';
import dayjs from 'dayjs';
import withAuth from 'components/withAuth';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Group: React.FC = () => {
  const [form] = Form.useForm();
  const [unixTime, setUnixTime] = useState(0);

  const onChange = (value: dayjs.Dayjs, dateString: string) => {
    setUnixTime(value.valueOf());
  };

  const onFinish = () => {
    let body = form.getFieldsValue(['title', 'menu', 'deliveryPrice', 'currentPeopleNum', 'maximumPeopleNum'
    , 'content']);
    body.matchingEndTime = unixTime;
    body.available = true;
    let time = Date.now();
    body.createdAt = time;
    body.updatedAt = time;
    body.intraId = 'default';
    console.log(body, body.matchingEndTime);
    axios.post("http://localhost:8080/posts", body);
  };

  const disabledHours = () => {
    const currentHour = new Date().getHours();
    const hours = [];
    for (let i = 0; i < currentHour; i++) {
      hours.push(i);
    }
    return hours;
  };

  const disabledMinutes = (selectedHour : number): number[] => {
    if (selectedHour === new Date().getHours()) {
      const currentMinute = new Date().getMinutes();
      const minutes = [];
      for (let i = 0; i < currentMinute; i++) {
        minutes.push(i);
      }
      return minutes;
    }
    return [];
  };

  return (
    <>
    <h1 className={styles.title}>배달 그룹 만들기</h1>
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      initialValues={{
        ["title"]: '같이 배달 시키실 분~~',
        ["menu"]: "미정",
        ["joinable"]: false,
        ["currentPeopleNum"]: 1,
        ["maximumPeopleNum"]: 300,
        ['content']: "",
      }}
      className={styles.form}
    >
      <Form.Item name="title" label="배달 그룹명" rules={[{ required: true, message: '필수 항목입니다' }]}>
        <Input placeholder='그룹 이름을 적어주세요'/>
      </Form.Item>
      <Form.Item name="menu" label="메뉴 혹은 지점" rules={[{ required: true }]}>
        <Input placeholder='메뉴 또는 지점을 적어주세요'/>
      </Form.Item>
      <Form.Item name="joinable" rules={[{ required: false }]} valuePropName="checked">
        <Checkbox defaultChecked={false}>따로 먹을게요</Checkbox>
      </Form.Item>
      <Form.Item name="deliveryPrice" label="예상 배달 팁" rules={[{ required: false }]}>
        <InputNumber min={0} max={100000} />
      </Form.Item>
      <Space direction="horizontal">
        <Form.Item name="currentPeopleNum" label="현재 인원" rules={[{ required: true }]}>
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item name="maximumPeopleNum" label="최대 인원" rules={[{ required: true }]}>
          <InputNumber min={0} max={300} />
        </Form.Item>
      </Space>
      <Form.Item name="matchingEndTime" label="마감시간" rules={[{ required: true }]}>
        <TimePicker format="HH:mm" showNow={true} onChange={onChange} disabledHours={disabledHours} disabledMinutes={disabledMinutes}/>
      </Form.Item>
      <Form.Item name="content" label="하고 싶은 말" rules={[{ required: false }]}>
      <TextArea rows={4} placeholder="200자 제한" maxLength={200} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          제출
        </Button>
        <Button htmlType="button" danger href="/">
          취소
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default withAuth(Group);
