import { Layout, Button, Switch, Space, Dropdown, Collapse, Table, Modal, 
    FloatButton, Input, Form, Checkbox, InputNumber } from "antd";
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
import React, {useState} from 'react';
import styles from '../styles/header.module.css';
import {FormOutlined, UserOutlined} from '@ant-design/icons';
import axios from "axios";
import {join} from "path";

React.useLayoutEffect = React.useEffect;

const { TextArea } = Input;
const { Panel } = Collapse;
const { Header, Footer, Sider, Content } = Layout;

interface DataType {
    intraId: string;
    partyTitle: string;
    peopleNum: number;
    joinable: boolean;
    postId: any;
  }

const columns: ColumnsType<DataType> = [
    {
        title: '파티장',
        dataIndex: 'intraId',
        key: 'intraId',
        render: (text) => <p>{text}</p>,
    },
    {
        title: '파티 이름',
        dataIndex: 'partyTitle',
        key: 'partyTitle',
        render: (text) => <p>{text}</p>,
    },
    {
        title: '파티 인원',
        dataIndex: 'peopleNum',
        key: 'peoplwNum',
        render: (text) => <p>{text}</p>,
    },
    {
        title: '공동 식사 여부',
        dataIndex: 'joinable',
        key: 'joinable',
        render: (joinable) => joinable == true ? <p>같이 먹어도 되요</p> : <p>따로 먹을게요</p>,
    },
];

const items: MenuProps['items'] = [
    {
      label: <p>hi</p>,
      key: '0',
      danger: true,
    },
    {
      label: <p>hihi</p>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
];

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
};


function UserComment({ comment } : any, { key }){
    return (
        <p style={{wordBreak: "break-all"}}>{comment.intraId}: {comment.content}</p>
    );
}

function UserCard({ card } : any, { key }){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [parties, setParties] = useState([]);
    const [comments, setComments] = useState([]);

    const [form] = Form.useForm();
    const totalPrice = card.deliveryPrice;
    const peopleBefore = card.currentPeople;
    const [values, setValues] = useState({peopleNum: peopleBefore + 1,
      expectedPrice: totalPrice != undefined ? Math.round(totalPrice/(peopleBefore + 1)) : undefined});
    const maxP = card.maxPeople - peopleBefore;
    const {peopleNum, expectedPrice} = values;

    const [text, setText] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    const postParty = async () => {
        let body = {
            postId: card._id,
            intraId: "default",
            partyTitle: form.getFieldValue("partyTitle"),
            joinable: form.getFieldValue("joinable"),
            peopleNum: form.getFieldValue("peopleNum"),
        }
        await axios.post("http://localhost:8080/parties", body);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = () => {
      setValues({
        peopleNum: peopleBefore + form.getFieldValue("peopleNum"),
        expectedPrice: totalPrice != undefined ?
        Math.round(totalPrice / (peopleBefore + form.getFieldValue("peopleNum"))) : undefined
      });
    };
    
    async function getParties() {
      await axios.get("http://localhost:8080/parties/" + card._id)
        .then(res => {
          setParties(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }

    async function getComments() {
      await axios.get("http://localhost:8080/comments/" + card._id)
        .then(res => {
          setComments(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }

    async function onCommentSubmit() {
        let body = {
            postId: card._id,
            content: text,
            intraId: "defualt"
        };
        await axios.post("http://localhost:8080/comments/", body);
    }

    function onTextChange(e : any) {
        setText(e.target.value);
        console.log(e.target.value);
    }

    return (
            <Collapse onChange={getParties}>
                <Panel header={card.title} key="1" showArrow={false}
                extra={<span>{"메뉴: " + card.menu + " "} <UserOutlined /> {card.currentPeople} / {card.maxPeople}</span>}>
                    <Space style={{display: "flex", justifyContent: "space-between"}} direction="horizontal">
                        <p>추가 정보:</p>
                        <Button type="primary" onClick={showModal}>
                            그룹에 참여하기
                        </Button>
                        <Modal open={isModalOpen} onOk={postParty} onCancel={handleCancel}>
                            <h1 className={styles.title}>파티 추가</h1>
                            <div style={{textAlign:'right', paddingRight:'20%'}}>
                                예상 배달 팁: {totalPrice}/{peopleNum}={expectedPrice}원
                            </div>
                            <Form
                            {...layout}
                            form={form}
                            name="control-hooks"
                            initialValues={{
                                ["joinable"]: false,
                                ["peopleNum"]: 1
                            }}
                            className={styles.form}
                            >
                            <Form.Item name="partyTitle" label="파티 이름" rules={[{ required: true }]}>
                                <Input placeholder='파티 이름을 적어주세요'/>
                            </Form.Item>
                            <Form.Item name="joinable" rules={[{ required: false }]} valuePropName="checked">
                                <Checkbox defaultChecked={false}>따로 먹을게요</Checkbox>
                            </Form.Item>
                            <Form.Item name="peopleNum" label="파티 인원" rules={[{ required: true }]}>
                                <InputNumber min={1} max={maxP} onChange={onChange} />
                            </Form.Item>
                            </Form>
                        </Modal>
                    </Space>
                    <p style={{wordBreak: "break-all"}}>{card.content}</p>
                    <Table columns={columns} rowKey={"_id"} dataSource={parties} pagination={false}/>
                <Collapse ghost onChange={getComments}>
                    <Panel header="댓글 창" key="2">
                        {comments.map(comment => (
                            <UserComment comment={comment} key={comment._id}/>
                        ))}
                        <Space.Compact block>
                            <TextArea placeholder="100자 제한" maxLength={100} onChange={onTextChange}/>
                            <Button type="primary" onClick={onCommentSubmit}>작성</Button>
                        </Space.Compact>
                    </Panel>
                </Collapse>

                </Panel>

            </Collapse>
    );
}

const Main: React.FC = () => {
    const [switchValue, setSwitchValue] = useState(true);    
    const [availableCard, setAvailableCard] = useState([]);
    const [unavailableCard, setUnavailableCard] = useState([]);

    const handleSwitchChange = (checked: boolean) => {
        setSwitchValue(checked);
    };

    let aCard = Array();
    let uCard = Array();
    let cards = Array();

    const getCards = async () => {
      await axios.get("http://localhost:8080/posts")
        .then(res => {
          cards = res.data;
          cards.map(c => (
              c.available ? aCard.push(c) : uCard.push(c)
          ));
          setAvailableCard(aCard);
          setUnavailableCard(uCard);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getCards();
    
    return (
        <>
        <Header className={styles.headerStyle}>
            <Space className={styles.headerSpace}direction="horizontal">
                <Button href="/group" icon={<FormOutlined />}>글 쓰기</Button>
                <Switch checkedChildren="모집 중" unCheckedChildren="마감" defaultChecked={true} onChange={handleSwitchChange}/>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                        Click me
                        </Space>
                    </a>
                </Dropdown>
            </Space>
        </Header>
        <FloatButton icon={<FormOutlined />} tooltip={<div>그룹 생성하기</div>} 
        shape="square" type="primary" href="/group" description="그룹 생성"/>
        <div className={styles.pad}>
            {switchValue ? availableCard.map(card => (<UserCard card={card} key={card._id}/>))
            : unavailableCard.map(card => (<UserCard card={card} key={card._id}/>))}
        </div>
        </>
        );
}

export default Main;
