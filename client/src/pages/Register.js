import React from 'react'
import "../styles/RegisterStyles.css"
import {Form, Input , message} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'; 
const Register = () => {
  const navigate = useNavigate();
   const [form] = Form.useForm();
  
   const onFinish = async(values) => {
    try {
      const res = await axios.post('/api/v1/user/register', values);
      if(res.data.success) {
        message.success('Registered successfully'); //this message is coming from antd
        form.resetFields();
        navigate('/login');
      }else{
        message.error(res.data.message); //this message is coming from antd
        form.resetFields();
      }
      
    } catch (error) {
      console.log(error);
      message.error(`Error registering User: ${error}`)
      form.resetFields();
    }
    // console.log('Success:', values, form);
  
  };
  
  return (
    <>
    <div className='form-container'>
     
      <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
     
      autoComplete="off"
      className="register-form"
      
    >
       <h3 className="text-center">Register Form</h3>
      {/* 1. A form item for name/username */}
      <Form.Item
        label="Username"
        name="name"
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