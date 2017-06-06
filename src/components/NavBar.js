import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/lib/menu/style/css';
import { Inicio, MisionVision, Productos, QuienesSomos, Contactanos } from '../components/index.js';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item

class NavBar extends Component {

  handleClick(e) {
    console.log('click', e)
  }

  render() {
    return (
      <div>
        <Menu
        mode='horizontal'
        onClick={this.handleClick}
        >
          <img src='http://imgur.com/gallery/v2kh4'/> 
          <MenuItem key='inicio'>
           <Link to='/inicio'><Icon type="home" />Inicio</Link>
          </MenuItem>
          <MenuItem key='quienessomos'>
            <Link to='/quienessomos'>Quiénes somos</Link>
          </MenuItem>
          <MenuItem key='mv'>
            <Link to='/mv'>Misión y Visión</Link>
          </MenuItem>
          <MenuItem key='productos'>
            <Link to='/productos'>Productos</Link>
          </MenuItem>
          <MenuItem key='presupuesto'>
            <Link to='/presupuesto'>Presupuesto</Link>
          </MenuItem>
          <MenuItem key='contactanos'>
            <Link to='/contactanos'>Contáctanos</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default NavBar;