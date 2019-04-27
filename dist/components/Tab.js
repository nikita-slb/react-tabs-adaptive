import React from 'react';
import PropTypes from 'prop-types';
/**
 * Tab - tab button
 */

class Tab extends React.Component {
  render() {
    let {
      isActive,
      tabName,
      counter,
      tabIndex
    } = this.props;
    return React.createElement("li", {
      className: `Tab ${isActive ? "Tab-active" : ""}`,
      onClick: () => this.props.onClick(tabIndex)
    }, React.createElement("span", {
      className: "Tab-name"
    }, tabName, counter > 0 && React.createElement("span", {
      className: "TabCounter"
    }, counter)));
  }

}

Tab.displayName = "Tab";
Tab.defaultProps = {
  counter: 0
};
Tab.propTypes = {
  counter: PropTypes.number,
  // counter value
  tabName: PropTypes.string.isRequired // name of tab

};
export default Tab;