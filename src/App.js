import './App.css';
import {Select} from "antd";


function App() {
    const fruits = ['Bananne', 'Mangue', 'Orange']

    return (
    <div className="App">
       <header className="App-header">
           <p>Chosissez votre Fruit</p>
            <Select
                mode='multiple'
                placeholder='Selectionner'
                maxTagCount={2}
                allowClear
                style={{width: '50%'}} >
                {fruits.map((fruit,index) => {
                    return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
                })}
            </Select>
       </header>

    </div>
  );
}

export default App;
