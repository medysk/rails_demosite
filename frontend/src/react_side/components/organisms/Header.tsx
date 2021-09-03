import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useHistory } from 'react-router-dom';
import { Paths } from '../Routes';

const { Header } = Layout;

const HeaderOrganism = (): JSX.Element => {
  const [current, setCurrent] = useState('2');

  const history = useHistory();

  const handleClick = (e: MenuInfo) => {
    setCurrent(e.key);

    switch (e.key) {
      case '1':
        window.location.href = '/';
        break;
      case '2':
        history.push(Paths.homePath);
        break;
      case '3':
        history.push(Paths.characterIndexPath);
        break;
    }
  };

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={(e) => handleClick(e)}
        selectedKeys={[current]}
      >
        <Menu.Item key="1">Rails</Menu.Item>
        <Menu.Item key="2">Home</Menu.Item>
        <Menu.Item key="3">Characters</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderOrganism;
