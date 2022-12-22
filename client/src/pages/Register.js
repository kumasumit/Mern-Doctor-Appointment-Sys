import React from 'react'
import "../styles/RegisterStyles.css"
import {Form, Input } from 'antd';
import {Link} from 'react-router-dom';
const Register = () => {
   const [form] = Form.useForm();
  
   const onFinish = (values) => {
    console.log('Success:', values, form);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <div className='form-container'>
     
      <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="register-form"
      
    >
       <h3 className="text-center">Register Form</h3>
      {/* 1. A form item for name/username */}
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        
      >
        <Input type="text" required/>
      </Form.Item>
      {/* 2. A form item for email*/}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
       
      >
        <Input type="email" required/>
      </Form.Item>
      {/* 3. A form item for password/password */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input type="password"/>
      </Form.Item>
      <Link to="/login" className='m-3'>Already User, Login here ?</Link> 
     <button className='btn btn-primary' type='submit'>Register</button>
    </Form>
    </div>
    </>
  )
}

export default Register