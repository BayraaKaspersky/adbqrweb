import {useEffect , useState} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Table} from 'antd'

function App() {

const [data , setData] = useState("")

const columns = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Овог / Нэр',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ирц',
    dataIndex: 'isRegistered',
    key: 'isRegistered',
    // render(text, record) {
    //   return {
    //     props: {
    //       style: { color: false ? "blue" : "red" }
    //     },
    //     children: <div>{"121"}</div>
    //   };
    // }

  },
];


useEffect(()=>{
  axios.get('http://ec2-3-127-224-144.eu-central-1.compute.amazonaws.com/qr/list' , {
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    crossdomain:true
  }).then((response)=> {
    setData(response.data)
  })
  },[])



function dataSource(){
  let arr = [] 
  for(let i in data) {
    arr.push(
      {
        id: data[i].id,
        name: data[i].name,
        isRegistered:data[i].isRegistered ? 'ирсэн':'ирээгүй',
      }
    )
  }
  return arr
}

// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];




return (
    <Table rowClassName={(record, index) => (record.amount > 50 ? "red" : "green")} dataSource={dataSource()} columns={columns} />
  );
}


export default App;
