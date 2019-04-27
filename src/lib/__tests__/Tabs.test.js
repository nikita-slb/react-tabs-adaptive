import React from "react";
import {Tabs, Tab} from "../index";
import renderer from "react-test-renderer";

describe("Tabs", () => {
    it("renders properly", () => {
        const tree = renderer
            .create(
                <Tabs>
                    <Tab tabName="Tab 1">
                        Tab 1 text
                    </Tab>
                    <Tab tabName="Tab 2" counter={4}>
                        Tab 2 text
                    </Tab>
                </Tabs>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});