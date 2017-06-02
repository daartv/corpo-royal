import { Menu } from 'antd';
import React, { Component } from 'react';
import 'antd/lib/menu/style/css';

class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu mode='horizontal'> 
          <Menu.Item key='one'>
            Inicio
          </Menu.Item>
          <Menu.Item key='two'>
            Quienes somos
          </Menu.Item>
          <Menu.Item key='three'>
            Mision y Vision
          </Menu.Item>
          <Menu.Item key='four'>
            Productos
          </Menu.Item>
          <Menu.Item key='five'>
            Contactanos
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar;