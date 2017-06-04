import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';


const FormItem = Form.Item;
const Option = Select.Option;

class Contactanos extends Component {

  render() {

    return (
    	<Form>

    		<Select defaultValue="¿En qué lo podemos ayudar?" style={{ width: 200 }}>
    		  <Option value="presupuesto">Presupuesto</Option>
    		  <Option value="personalizado">Pedido Personalizado</Option>
    		  <Option value="otro">Otro</Option>
    		</Select>

    		<FormItem label='Nombre y Apellido' style={{ width: 200 }}>
	    		<Input>
	    		</Input>
    		</FormItem>

    		<FormItem label='Correo Electrónico' style={{ width: 200}}>
	    		<Input>
	    		</Input>
    		</FormItem>

    		<FormItem label='Número de Teléfono' style={{ width: 200}}>
	    		<Input>
	    		</Input>
    		</FormItem>


    		<FormItem label='Háganos llegar su mensaje' style={{ width: 400 }} >
	    		<Input type='textarea'>
	    		</Input>
    		</FormItem>
    		<Button
    		type='primary'
    		icon='message'>
    		  Enviar 
    		</Button>

    	</Form>

    )
  }
}

export default Contactanos;