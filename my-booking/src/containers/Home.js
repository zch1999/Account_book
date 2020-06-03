import React, { Component } from 'react'
import logo from '../logo.svg'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import TotalPrice from '../components/TotalPrice'

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

class Home extends Component {
  render() {
    let totalIncome = 0,totalOutcome = 0
    items.forEach(item => {
      if(item.category.type === TYPE_OUTCOME){
        totalOutcome += item.price
      }else {
        totalIncome += item.price
      }
    })

    return (
      <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>欢迎来到天天记账簿</p>
        <div className="row">
          <div className="col">
            <MonthPicker 
              year={2019}
              month={7}
              onChange={() => {}}
            />
          </div>
          <div className="col">
            <TotalPrice 
              income={totalIncome}
              outcome={totalOutcome}
            />
          </div>
        </div>
      </header>
      <div className="content-area py-3 px-3">
        <ViewTab activeTab={LIST_VIEW} onTabChange={() => {}} />
        <CreateBtn onClick={() => {}} />
        <PriceList 
          items={items}
          onModifyItem={() => {}}
          onDeleteItem={() => {}}
        />
      </div>
      </React.Fragment>
    )
  }
}

export default Home