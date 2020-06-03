import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2020-05-14",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName": "ios-plane"
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
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

function App() {
  return (
    <div className="App">
      <Home />
      {/* <MonthPicker
        year={2020}
        month={5}
        onChange={(year, month) => {console.log(year,month)}}
        />
      <ViewTab 
        activeTab= {LIST_VIEW}
        onTabChange={(view) => {console.log(view)}} 
      />*/}
      {/* <PriceList 
        items={items}
        onModifyItem={(item) => {alert(item.id)}}
        onDeleteItem={(item) => {alert(item.id)}}
        /> */}
    </div>
  );
}

export default App;
