import React from 'react'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'
import { items, categories } from '../../containers/Home'

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid]
  return item
})

const props = {
  items: itemsWithCategory,
  onModifyItem: () => {},
  onDeleteItem: () => {}
}

let wrapper
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props}/>)
  })
  it('should render the component to match snapshot', () => {
    //快照 test会先查看和快照是否有差别
    expect(wrapper).toMatchSnapshot()
  })
})