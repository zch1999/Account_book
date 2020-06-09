import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import MonthPicker from '../MonthPicker'

let props = {
  year: 2020,
  month: 5,
  onChange: jest.fn()
}

let wrapper
describe('test MOnthPicker component', () => {
  beforeEach(() => {
    wrapper = mount(<MonthPicker {...props} />)
  })
  //快照，查看修改
  it('should render the component to match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()//快照
  })
  it('should the correct year and month, show correct dropdown status',() => {
    const text = wrapper.find('.dropdown-toggle').first().text()
    expect(text).toEqual('2020年05月')
    expect(wrapper.find('.dropdown-menu').length).toEqual(0)//关闭状态
    expect(wrapper.state('isOpen')).toEqual(false)//state.isOPen
    expect(wrapper.state('selectedYear')).toEqual(props.year)
  })
  it('after click the button, dropdown should show, year list&month list should have the correct items',() => {
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)//打开状态state.isOpen
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)//打开状态
    expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9)//年长度
    expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)//月份长度
    expect(wrapper.find('.years-range .dropdown-item.active').text()).toEqual('2020年')//显示年份
    expect(wrapper.find('.months-range .dropdown-item.active').text()).toEqual('05月')//显示月份
    expect(wrapper.find('.years-range .dropdown-item').first().text()).toEqual(`${props.year - 4}年`)//当前年份的前四年
    expect(wrapper.find('.months-range .dropdown-item').first().text()).toEqual('01月')
  })
  it('after click the button, dropdown should show, year list&month list should have the correct items',() => {
    wrapper.find('.dropdown-toggle').simulate('click')//点击
    wrapper.find('.years-range .dropdown-item').first().simulate('click')//点击展示的第一个年
    expect(wrapper.find('.years-range .dropdown-item').first().hasClass('active')).toEqual(true)//判断是否有样式
    expect(wrapper.state('selectedYear')).toEqual(2016)//判断props中的selectedYear是否变为对应值
    wrapper.find('.months-range .dropdown-item').first().simulate('click')//点击展示的第一个月
    expect(wrapper.state('isOpen')).toEqual(false)//关闭状态state.isOpen
    expect(props.onChange).toHaveBeenCalledWith(2016,1)//改变后的数据变化
  })
  it('after the dropdown is shown, click the document should close the dropdown',() => {
    let eventMap = {}
    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb
    })
    const wrapper = mount(<MonthPicker {...props} />)
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)//打开状态state.isOpen
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)//打开状态
    //点击的时dropdown内容时
    eventMap.click({
      target: ReactDOM.findDOMNode(wrapper.instance())
    })
    expect(wrapper.state('isOpen')).toEqual(true)//打开状态state.isOpen
    eventMap.click({
      target: document
    })
    expect(wrapper.state('isOpen')).toEqual(false)//关闭状态state.isOpen
  })
})