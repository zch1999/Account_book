import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2020-05-14",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome"
    }
  },
  {
    "id": 2,
    "title": "去云南旅游",
    "price": 400,
    "date": "2020-05-14",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>欢迎来到天天记账簿</p>
      </header>
      <PriceList 
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}}
        />
    </div>
  );
}

export default App;
