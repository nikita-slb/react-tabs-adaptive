/* eslint getter-return: "off" */

import React from 'react';
import { Tabs, Tab } from '../index';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tabs', () => {
  it('renders properly', () => {
    const tree = renderer
    .create(
      <Tabs/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('test select tab handler', () => {
    const clickFn = jest.fn(activeTabIndex => activeTabIndex);
    const selectedTabIndex = 1;

    const TabsComponent = mount((
      <Tabs activeTabIndex={0} selectTab={clickFn}>
        <Tab tabName="Tab 1">Tab 1</Tab>
        <Tab tabName="Tab 2">Tab 2</Tab>
      </Tabs>
    ));

    TabsComponent
      .find('li.Tab')
      .at(selectedTabIndex)
      .simulate('click');

    expect(clickFn).toHaveReturnedWith(selectedTabIndex);

    TabsComponent.unmount();
  });

  it('test set active tab handler', () => {
    const clickFn = jest.fn();
    const defaultTabIndex = 0;
    const selectedTabIndex = 1;

    const TabsComponent = mount((
      <Tabs activeTabIndex={defaultTabIndex} selectTab={clickFn}>
        <Tab tabName="Tab 1">Tab 1</Tab>
        <Tab tabName="Tab 2">Tab 2</Tab>
      </Tabs>
    ));

    expect(TabsComponent.prop('activeTabIndex')).toEqual(defaultTabIndex);
    expect(TabsComponent.state('activeTabIndex')).toEqual(defaultTabIndex);

    TabsComponent.setProps({ activeTabIndex: selectedTabIndex });

    expect(TabsComponent.prop('activeTabIndex')).toEqual(selectedTabIndex);
    expect(TabsComponent.state('activeTabIndex')).toEqual(selectedTabIndex);

    TabsComponent.unmount();
  });
});
