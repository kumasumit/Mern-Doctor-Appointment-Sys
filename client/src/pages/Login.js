import React from 'react'
import "../styles/LoginStyles.css"
import {Form, Input, message } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
   const [form] = Form.useForm();
  
   const onFinish = async(values) => {
    try {
      const res = await axios.post('/api/v1/user/login', values);
      if(res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success('Logged in successfully'); //this message is coming from antd
        form.resetFields();
        navigate('/');
      }else{
        message.error(res.data.message); //this message is coming from antd
        form.resetFields();
      }
    } catch (error) {
      console.log(error);
      message.error(`Error Logging User: ${error.message} ${error.code}`)
      form.resetFields();
    }
  };
  
  return (
    <>
    <div className='form-container'>
     
      <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
      
      autoComplete="off"
      className="login-form"
      
    >
       <h3 className="text-center">Login Form</h3>
     
      {/* 1. A form item for email*/}
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
      {/* 2. A form item for password/password */}
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
      <Link to="/register" className='m-3'>Not a User, Register here ?</Link> 
     <button className='btn btn-primary' type='submit'>Login</button>
    </Form>
    </div>
    </>
  )
}

export default Login