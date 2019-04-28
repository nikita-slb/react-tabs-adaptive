/* eslint getter-return: "off" */

import React from 'react';
import { Tab } from '../index';
import renderer from 'react-test-renderer';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tab', () => {
  it('renders properly', () => {
    const tree = renderer
    .create(
      <Tab tabName="Tab"/>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const tab = shallow((<Tab tabName="Tab" onClick={mockCallBack}/>));

    tab.find('li').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('render with props', () => {
    const props = {
      tabName: 'Tab',
      tabIndex: 1,
      isActive: true,
      counter: 1
    };

    const TabComponent = mount(<Tab {...props} />);

    expect((TabComponent).prop('tabName')).toEqual(props.tabName);
    expect((TabComponent).prop('tabIndex')).toEqual(props.tabIndex);
    expect((TabComponent).prop('isActive')).toEqual(props.isActive);
    expect((TabComponent).prop('counter')).toEqual(props.counter);
  });
});
