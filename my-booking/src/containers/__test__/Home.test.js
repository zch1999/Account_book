import React from 'react'
import { mount } from 'enzyme'
import Home,{newItem} from '../Home'

import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from '../../utility'
import PriceList from '../../components/PriceList'
import ViewTab from '../../components/ViewTab'
import MonthPicker from '../../components/MonthPicker'
import CreateBtn from '../../components/CreateBtn'
import TotalPrice from '../../components/TotalPrice'

let wrapper 
describe('test Home container component',() => {
  beforeEach(() => {
    wrapper = mount(<Home />)
  })
  it('should render the default layout',() => {
    const currentDate = parseToYearAndMonth('2020/6/14')
    expect(wrapper.find(PriceList).length).toEqual(1)//PriceList组件是否使用
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)//viewtab
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year)//MonthPicker年份
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month)
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)
  }) 
  it('click the another view tab, should change the default view',() => {
    wrapper.find('.nav-item a').last().simulate('click')//点击viewtab中的最后一项
    expect(wrapper.find(PriceList).length).toEqual(0)
    expect(wrapper.find('.chart-title').length).toEqual(1)
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)//activedtab是否为Chart_view
  })
  it('click the new month item, should switch to the correct items',() => {
    wrapper.find('.dropdown-toggle').simulate('click')//点击dropdown
    wrapper.find('.months-range .dropdown-item').at(4).simulate('click')//点击5月
    expect(wrapper.find(MonthPicker).props().month).toEqual(5)//点击后是5月
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)//两项5月份的数据要相同
  })
  it('click the create button, should create the new item', () => {
    wrapper.find(CreateBtn).simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)
    expect(wrapper.state('items')[0]).toEqual(newItem)
  })
})