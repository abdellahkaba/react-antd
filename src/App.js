import './App.css';
import {Table} from "antd";
const data = [
    {
        name : "Kaba",
        age : 25,
        adress : "Poste Thiaroye",
        key : 1
    },
    {
        name : "N'diaye",
        age : 28,
        adress : "Dakar",
        key : 2
    },
    {
        name : "Balla",
        age : 26,
        adress : "Pikin",
        key : 3
    },
    {
        name : "Kamara",
        age : 18,
        adress : "Medine",
        key : 4
    }
]
const columns = [
    {
        title: 'Name',
        dataIndex:'name',
        key: 'key',
        render: name => {
            return <a>{name}</a>
        }
    },
    {
        title: 'Age',
        dataIndex:'age',
        key: 'key',
        sorter: (a,b) => a.age - b.age
    }, {
        title: 'Adress',
        dataIndex:'adress',
        key: 'key'
    },
    {
        title: 'Graduated?',
        key: 'key',
        render: payload => {
          return <p>{payload.age>20?'True':'False'}</p>
        }
    }
]
function App() {
    return (
    <div className="App">
       <header className="App-header">
            <Table
                dataSource={data}
                columns={columns}
                pagination
            >

            </Table>
       </header>

    </div>
  );
}

export default App;
