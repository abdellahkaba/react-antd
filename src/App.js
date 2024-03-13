import React from 'react';
import {Button, Form, Input, message, Table} from 'antd';
import "./App.css"



const App = () => {
    const onFinish = (e) => {
        console.log(e)
        setTimeout(() => {
            message.success("Login success")
            // message.error("error desole !")
            //message.warning("Avertissement")
        },2000)
    }
    return (
        <div className="App">
            <header className="container-fluid bg-info text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <Form onFinish={onFinish}>
                    <Form.Item  label="UserName" name="username">
                        <Input  placeholder="User name" required></Input>
                    </Form.Item>
                    <Form.Item label="Mot de pass" name="password">
                        <Input.Password placeholder="Mot de passe"></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button block type='primary' htmlType='submit'>Login</Button>
                    </Form.Item>
                </Form>
            </header>
        </div>

)};
export default App;