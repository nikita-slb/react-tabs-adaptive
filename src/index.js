import React from 'react';
import ReactDOM from "react-dom";
import {Tabs, Tab} from "./lib";

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            activeTabIndex: 0
        }

    }

    render() {

        const {activeTabIndex} = this.state;

        return (
            <div className="App">
                <Tabs activeTabIndex={activeTabIndex} selectTab={(activeTabIndex)=>this.setState({activeTabIndex})}>
                    <Tab tabName="Tab 1">
                        <p>
                            Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
                            interpretaris.
                            Cum ridens scriptorem ea. Ut duo ocurreret reprehendunt. Te pro veritus suscipit sententiae,
                            est
                            ut lorem nusquam. Eu ius fierent deterruisset. Nec cu amet falli.
                        </p>
                        <p>
                            Ut nam case choro oporteat. No veniam eruditi conceptam his, atomorum mnesarchum eum ex, eu
                            animal nostrud epicurei cum. Civibus voluptatibus vim ut. Ea sonet similique pro, malorum
                            feugait dignissim mea ei, an summo offendit lobortis duo. Vidit latine disputationi cu nec,
                            iuvaret equidem et has, vis tantas splendide definiebas ei. Vis homero eripuit ut. In esse
                            deseruisse nam, eu meliore efficiendi vel, te vim mutat porro volumus.
                        </p>
                    </Tab>
                    <Tab tabName="Tab 2" counter={4}>
                        <p>
                            Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
                            interpretaris.
                            Cum ridens scriptorem ea. Ut duo ocurreret reprehendunt. Te pro veritus suscipit sententiae,
                            est
                            ut lorem nusquam. Eu ius fierent deterruisset. Nec cu amet falli.
                        </p>
                    </Tab>
                    <Tab tabName="Tab 3">
                        <p>
                            Ut nam case choro oporteat. No veniam eruditi conceptam his, atomorum mnesarchum eum ex, eu
                            animal nostrud epicurei cum. Civibus voluptatibus vim ut. Ea sonet similique pro, malorum
                            feugait dignissim mea ei, an summo offendit lobortis duo. Vidit latine disputationi cu nec,
                            iuvaret equidem et has, vis tantas splendide definiebas ei. Vis homero eripuit ut. In esse
                            deseruisse nam, eu meliore efficiendi vel, te vim mutat porro volumus.
                        </p>
                    </Tab>
                    <Tab tabName="Tab 4" counter={122}>
                        <p>
                            Lorem ipsum dolor sit amet, eum alterum patrioque in, ex ius urbanitas forensibus
                            interpretaris.
                            Cum ridens scriptorem ea. Ut duo ocurreret reprehendunt. Te pro veritus suscipit sententiae,
                            est
                            ut lorem nusquam. Eu ius fierent deterruisset. Nec cu amet falli.
                        </p>
                        <p>
                            Ut nam case choro oporteat. No veniam eruditi conceptam his, atomorum mnesarchum eum ex, eu
                            animal nostrud epicurei cum. Civibus voluptatibus vim ut.
                        </p>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));