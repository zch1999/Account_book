import React from 'react'
import { shallow } from 'enzyme'
import Ionicon from 'react-ionicons'
import toJson from 'enzyme-to-json'
import PriceList from '../PriceList'
import { items, categories } from '../../containers/Home'

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid]
  return item
})

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
}

let wrapper
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props}/>)
  })
  //快照，查看修改
  it('should render the component to match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  //对比数组长度是否相等
  it('should render correct price items length',() => {
    expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
  })
  //Ionicon测试
  it('should render correct icon and price for each item',() => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)//icon的classname
  })
  //判断函数调用
  it('should trigger the correct function callbacks',() => {
    const firstItem = wrapper.find('.list-group-item').first()
    firstItem.find('a').first().simulate('click')//找到第一个
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])//修改后的数据变化是否相等
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
  })
})

