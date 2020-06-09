import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home'
import Create from './containers/Create'

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
    <Router>
    <div className="App">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/create">create</Link>
        <Link to="/edit/12">edit</Link>
      </ul>
      <div className="container pb-5">
      <Route path="/" exact component={Home} />
      <Route path="/create"  component={Create} />
      <Route path="/edit/:id"  component={Create} />
      </div>
    </div>
    </Router>
  );
}

export default App;
