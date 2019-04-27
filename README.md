# react-tabs-adaptive

A simple customizable react tabs component with adaptive design

[![Build Status](https://travis-ci.com/nikita-slb/react-tabs-adaptive.svg?branch=master)](https://travis-ci.com/nikita-slb/react-tabs-adaptive) [![npm version](https://badge.fury.io/js/react-tabs-adaptive.svg)](https://badge.fury.io/js/react-tabs-adaptive)


# Installation

```
npm install react-tabs-adaptive --save
```

or

```
yarn add react-tabs-adaptive
```

# Usage

### Uncontrolled mode

```
import { Tabs, Tab } from "react-tabs-adaptive";

        
<Tabs>
    <Tab tabName="Tab 1">
        <p>
             Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
             interpretaris.
        </p>
        <p>
             Ut nam case choro oporteat. No veniam eruditi conceptam his, atomorum mnesarchum eum ex, eu
             animal nostrud epicurei cum.
        </p>
    </Tab>
    <Tab tabName="Tab 2" counter={4}>
        <p>
             Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
             interpretaris.
        </p>
    </Tab>
</Tabs>
```

### Controlled mode

```
import { Tabs, Tab } from "react-tabs-adaptive";

        
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
                     Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
                     interpretaris.
                </p>
                <p>
                     Ut nam case choro oporteat. No veniam eruditi conceptam his, atomorum mnesarchum eum ex, eu
                     animal nostrud epicurei cum.
                </p>
            </Tab>
            <Tab tabName="Tab 2" counter={4}>
                <p>
                     Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
                     interpretaris.
                </p>
            </Tab>
        </Tabs>
     );
  }
}
```