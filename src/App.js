import './App.css';

import {Input} from "antd"
import {UserOutlined} from "@ant-design/icons";


function App() {

    return (
    <div className="App">
       <header className="App-header">
           <Input.Search
               placeholder='Name'
               prefix={<UserOutlined />}
               maxLength={5}
               allowClear


           >

           </Input.Search>

       </header>

    </div>
  );
}

export default App;
