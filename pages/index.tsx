import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Card, Layout, Button, Switch, Space, Dropdown } from "antd";
import type { MenuProps } from 'antd';
import React, {} from 'react';
import styles from '../styles/header.module.css';
import {FormOutlined} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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';
const REDIRECT_URI = "http://localhost:3000";

async function getToken(code: string) {
  const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
    grant_type: 'authorization_code',
    client_id: UID,
    client_secret: SECRET,
    code: code,
    redirect_uri: REDIRECT_URI,
  });
  return data.access_token;
}

function removeCodeFromUrl() {
  const { protocol, host, pathname } = window.location;
  const newUrl = `${protocol}//${host}${pathname}`;
  window.history.replaceState({}, document.title, newUrl);
}

const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">logout</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">something</a>,
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

function UserCard({ card } : any){
    return (
        <Card title={card.title}>

        </Card>
    );
}

const Main: React.FC = () => {

    const cards = [
        {
            id: 1,
            title: "1.아무거나",
            currentPeople: 5,
            maxPeople: 10
        },
        {
            id: 2,
            title: "2.아무거나 드실 분",
            currentPeople: 6,
            maxPeople: 11
        },
        {
            id: 3,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 4,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 5,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 6,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 7,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 8,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 9,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 10,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 11,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 12,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
        {
            id: 13,
            title: "맛있는 거 드실 분",
            currentPeople: 1,
            maxPeople: 100
        },
    ]
    
    return (
        <>
        <Header className={styles.headerStyle}>
            <Space direction="horizontal">
                <Button icon={<FormOutlined />}>글 쓰기</Button>
                <Switch checkedChildren="모집 중" unCheckedChildren="마감" defaultChecked />
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            seunghoy
                        </Space>
                    </a>
                </Dropdown>
            </Space>
        </Header>
        <div className={styles.pad}>
            {cards.map(card => (
                <UserCard card={card} key={card.id}/>
            ))}
        </div>
        </>
        );
}

export default Main;