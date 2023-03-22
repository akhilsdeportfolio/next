/** @format */

import React, {Fragment, useState} from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Drawer,
  notification,
} from "antd";

const {Header, Content, Footer} = Layout;

export async function getServerSideProps() {
  return {props: {content: "this is the content from the server"}};
}

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const Home = (props) => {
  console.log("Props", props);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{padding: "0 50px"}}>
        <Breadcrumb style={{margin: "16px 0"}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className='site-layout-content'
          style={{background: colorBgContainer}}>
          <Fragment style={{height: "100vh"}}>
            {JSON.stringify(props.content)}
            <Button type='primary' onClick={showDrawer}>
              Open
            </Button>
            <Drawer
              title='Basic Drawer'
              placement='right'
              onClose={onClose}
              open={open}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </Fragment>
          <>
            <Button type='primary' onClick={openNotification}>
              Open the notification box
            </Button>
          </>
        </div>
      </Content>
      <Footer style={{textAlign: "center"}}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
