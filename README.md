# react-tabs-adaptive 

A simple customizable react tabs component with adaptive design

[![Build Status](https://travis-ci.com/nikita-slb/react-tabs-adaptive.svg?branch=master)](https://travis-ci.com/nikita-slb/react-tabs-adaptive) [![npm version](https://badge.fury.io/js/react-tabs-adaptive.svg)](https://badge.fury.io/js/react-tabs-adaptive) [![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")


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

  constructor(props) {
    super(props);
    
    this.state = { activeTabIndex: 0 };
  }
  
  render() {
  
     const {activeTabIndex} = this.state;
  
     return (
        <Tabs activeTabIndex={activeTabIndex} selectTab={(activeTabIndex)=>this.setState({activeTabIndex})}>
            <Tab tabName="Tab 1">
                <p>
                     Lorem ipsum ...
                </p>
            </Tab>
            <Tab tabName="Tab 2" counter={4}>
                <MyComponent/>
            </Tab>
        </Tabs>
     );
  }
}
```

#Available Props

###Tabs

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th style="width: 40px;">required</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>activeTabIndex</td>
          <td>number</td>
          <td>0</td>
          <td>-</td>
          <td>Current active tab index</td>
        </tr>
        <tr>
          <td>selectTab</td>
          <td>function</td>
          <td></td>
          <td>-</td>
          <td>Select tab handler. Function return index value selected tab</td>
         </tr>
    </tbody>
</table>

###Tab

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th style="width: 40px;">required</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>tabName</td>
          <td>string</td>
          <td></td>
          <td>+</td>
          <td>Name of tab</td>
        </tr>
        <tr>
          <td>counter</td>
          <td>number</td>
          <td>0</td>
          <td>-</td>
          <td>Badge. Example: Counter new messages.</td>
         </tr>
    </tbody>
</table>