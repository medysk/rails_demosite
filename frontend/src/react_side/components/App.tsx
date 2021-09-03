import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Routes from './Routes';
import Header from './organisms/Header';

const { Content, Footer } = Layout;

const App = (): JSX.Element => {
  return (
    <Router>
      <Layout className="layout">
        <Header />

        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Routes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>RailsTest ©2021</Footer>
      </Layout>
    </Router>
  );
};

export default App;
