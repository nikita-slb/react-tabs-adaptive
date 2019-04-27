import React from "react";
import { Tabs, Tab } from "../index";
import renderer from "react-test-renderer";
describe("Tabs", () => {
  it("renders properly", () => {
    const tree = renderer.create(React.createElement(Tabs, null, React.createElement(Tab, {
      tabName: "Tab 1"
    }, "Tab 1 text"), React.createElement(Tab, {
      tabName: "Tab 2",
      counter: 4
    }, "Tab 2 text"))).toJSON();
    expect(tree).toMatchSnapshot();
  });
});