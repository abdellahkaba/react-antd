import './App.css';
import {Form, Button, Input} from "antd";


function App() {
    const onFinish = (e) => {
        console.log(e)
    }
    return (
    <div className="App">
       <header className="App-header">
         <Form onFinish={onFinish}>
             <Form.Item label="User Name" name="username">
                 <Input placeholder="User name" required></Input>
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
  );
}

export default App;
