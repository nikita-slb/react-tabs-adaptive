/* eslint getter-return: "off" */

import React from 'react';
import { Tabs } from '../index';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
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
});
