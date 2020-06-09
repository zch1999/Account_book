import React, { Component } from 'react'
import logo from '../logo.svg'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'
import TotalPrice from '../components/TotalPrice'

export const categories = {
  "1": {
    "id": "1",
    "name": "旅行",
    "type": "outcome",
    "iconName": "ios-plane"
  },
  "2": {
    "id": "2",
    "name": "理财",
    "type": "income",
    "iconName": "ios-plane"
  }
}
export const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2020-05-14",
    "cid": 1
  },
  {
    "id": 2,
    "title": "恰饭",
    "price": 400,
    "date": "2020-05-14",
    "cid": 1
  },
  {
    "id": 3,
    "title": "基金",
    "price": 400,
    "date": "2020-06-14",
    "cid": 2
  }
]

export const newItem = {
  "id": 4,
  "title": "新加",
  "price": 200,
  "date": "2020-07-24",
  "cid": 2
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth('2020/6/14'),
      tabView: LIST_VIEW
    }
  }

  //改变视图
  changeView = (view) => {
    this.setState({
      tabView: view
    })
  }

  //改变时间
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }

  //修改记录
  ModifyItem = (modifiedItem) => {
    const modifiedItems = this.state.items.map(item => {
      if(item.id === modifiedItem.id) {
        return { ...item, title: '更新后的标题'}
      }else{
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })
  }

  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }

  deleteItem = (deletedItem) => {
    const filteredItem = this.state.items.filter(item => item.id !== deletedItem.id)
    this.setState({
      items: filteredItem
    })
  }

  render() {
    const { items, currentDate, tabView } = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categories[item.cid]
      return item
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })
    let totalIncome = 0,totalOutcome = 0
    itemsWithCategory.forEach(item => {
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
              year={currentDate.year}
              month={currentDate.month}
              onChange={this.changeDate}
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
        <ViewTab activeTab={tabView} onTabChange={this.changeView} />
        <CreateBtn onClick={this.createItem} />
        { tabView === LIST_VIEW &&
        <PriceList 
          items={itemsWithCategory}
          onModifyItem={this.ModifyItem}
          onDeleteItem={this.deleteItem}
        />
        }
        { tabView === CHART_VIEW &&
            <h1 className="chart-title">图表</h1>
        }
      </div>
      </React.Fragment>
    )
  }
}

export default Home