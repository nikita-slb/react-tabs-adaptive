# react-tabs-adaptive 

A simple customizable react tabs component with adaptive design

![npm](https://img.shields.io/npm/v/react-tabs-adaptive.svg?color=blue) [![Build Status](https://travis-ci.com/nikita-slb/react-tabs-adaptive.svg?branch=master)](https://travis-ci.com/nikita-slb/react-tabs-adaptive) [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts") [![codecov](https://codecov.io/gh/nikita-slb/react-tabs-adaptive/branch/master/graph/badge.svg)](https://codecov.io/gh/nikita-slb/react-tabs-adaptive)


# Installation

```sh
npm install react-tabs-adaptive --save
```

or

```sh
yarn add react-tabs-adaptive
```

## Live Playground

To run that demo on your own computer:
* Clone this repository
* `yarn install`
* `yarn start`
* Visit http://localhost:3000/

# Usage

### Uncontrolled mode example

```js
import { Tabs, Tab } from "react-tabs-adaptive";
import MyComponent from "./MyComponent";

<Tabs>
  <Tab tabName="Tab 1">
    <p>
      Lorem ipsum ...
    </p>
  </Tab>
  <Tab tabName="Tab 2" counter={4}>
    <MyComponent/>
  </Tab>
</Tabs>
```

### Controlled mode example

```js
import { Tabs, Tab } from "react-tabs-adaptive";
import MyComponent from "./MyComponent";
        
class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = { activeTabIndex: 0 };
  }

  render () {
    const { activeTabIndex } = this.state;

    return (
      <div className="App">
        <Tabs activeTabIndex={activeTabIndex}
              selectTab={(selectedTabIndex) =>
                this.setState({ activeTabIndex: selectedTabIndex })
              }>
          <Tab tabName="Tab 1">
            <p>
              Lorem ipsum ...
            </p>
          </Tab>
          <Tab tabName="Tab 2" counter={4}>
            <MyComponent/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
```

# Available Props

### Tabs

 Name             | Type     | Default | Required | Description 
 ---              | ---      | ---:    | ---:     | ---
 `activeTabIndex` | number   | 0       | -        | Current active tab index. 
 `selectTab`      | function |         | -        | Select tab handler. Function return index value selected tab. 

### Tab

 Name             | Type     | Default | Required | Description 
 ---              | ---      | ---:    | ---:     | ---
 `tabName`        | string   |         | +        | Name of tab.
 `counter`        | number   | 0       | -        | Badge. Example: Counter new messages. 
 
# License

MIT