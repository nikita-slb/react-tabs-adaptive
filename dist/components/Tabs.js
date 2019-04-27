function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import "../styles/Tabs.scss";
/**
 * Tabs - parent component
 */

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "tabPanelRef", React.createRef());

    _defineProperty(this, "tabItemsRef", React.createRef());

    this.state = {
      activeTabIndex: props.activeTabIndex,
      leftScroll: 0,
      showLeftArrow: false,
      showRightArrow: false
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleScrollFrame = this.handleScrollFrame.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.getTabsSize = this.getTabsSize.bind(this);
  }

  componentDidMount() {
    const {
      clientWidth,
      scrollWidth
    } = this.tabPanelRef.current.getValues();
    this.setState({
      showRightArrow: scrollWidth > clientWidth
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeTabIndex !== prevState.activeTabIndex) {
      let tabsSize = this.getTabsSize();
      let activeTabSize = tabsSize[this.state.activeTabIndex] ? tabsSize[this.state.activeTabIndex] : null;

      if (activeTabSize) {
        const {
          clientWidth,
          scrollWidth
        } = this.tabPanelRef.current.getValues();
        let {
          offsetLeft,
          offsetWidth
        } = activeTabSize;
        let tabOffset = offsetLeft + Math.ceil(offsetWidth / 2);
        let scrollLeft = tabOffset - Math.ceil(clientWidth / 2);

        if (scrollLeft > scrollWidth - clientWidth) {
          scrollLeft = scrollWidth - clientWidth;
        }

        if (scrollLeft < 0) {
          scrollLeft = 0;
        }

        this.tabPanelRef.current.scrollLeft(scrollLeft);
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectTab && props.activeTabIndex !== state.activeTabIndex) {
      return {
        activeTabIndex: props.activeTabIndex
      };
    }

    return null;
  }

  render() {
    let {
      showLeftArrow,
      showRightArrow
    } = this.state;
    return React.createElement("div", {
      className: "Tabs"
    }, React.createElement("div", {
      className: "Tabs-Items-container"
    }, showRightArrow && React.createElement("div", {
      className: "Tab-arrow-right",
      onClick: this.scrollRight
    }), showLeftArrow && React.createElement("div", {
      className: "Tab-arrow-left",
      onClick: this.scrollLeft
    }), React.createElement("div", {
      className: "Tabs-Items-wrap"
    }, React.createElement(Scrollbars, {
      renderTrackHorizontal: ({
        style,
        ...props
      }) => React.createElement("div", _extends({}, props, {
        style: { ...style,
          display: 'none'
        }
      })),
      onScrollFrame: this.handleScrollFrame,
      ref: this.tabPanelRef
    }, React.createElement("ul", {
      className: "Tabs-Items",
      ref: this.tabItemsRef
    }, this.renderChildrenTabs())))), React.createElement("div", {
      className: "Tabs-Active-Content"
    }, this.renderActiveTabContent()));
  }
  /**
   * Tab click handler
   *
   * @param tabIndex {number} - id таба
   */


  handleTabClick(tabIndex) {
    if (tabIndex !== this.state.activeTabIndex) {
      const {
        scrollLeft,
        clientWidth,
        scrollWidth
      } = this.tabPanelRef.current.getValues();

      if (scrollWidth <= clientWidth) {
        this.setState({
          activeTabIndex: tabIndex,
          showLeftArrow: false,
          showRightArrow: false
        });
      } else {
        this.setState({
          activeTabIndex: tabIndex,
          showLeftArrow: scrollLeft > 0,
          showRightArrow: scrollLeft < scrollWidth - clientWidth
        });
      }

      if (this.props.selectTab) {
        this.props.selectTab(tabIndex);
      }
    }
  }
  /**
   * Render tab items
   *
   * @returns {Tab[]}
   */


  renderChildrenTabs() {
    return this.props.children.map((child, index) => {
      return React.cloneElement(child, {
        key: index,
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }
  /**
   * Render active tab content
   */


  renderActiveTabContent() {
    const {
      children
    } = this.props;
    const {
      activeTabIndex
    } = this.state;

    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }
  /**
   * Scroll frame handler
   *
   * @param {object} values - scroll position
   */


  handleScrollFrame(values) {
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = values;
    this.setState({
      showLeftArrow: scrollLeft > 0,
      showRightArrow: scrollLeft < scrollWidth - clientWidth
    });
  }
  /**
   * Scroll right button handler
   */


  scrollRight() {
    const {
      clientWidth,
      scrollLeft,
      scrollWidth
    } = this.tabPanelRef.current.getValues();
    const scrollStep = Math.ceil(clientWidth / 3);
    let newScrollValue = scrollLeft + scrollStep;

    if (newScrollValue >= scrollWidth - clientWidth) {
      newScrollValue = scrollWidth - clientWidth;
    }

    this.tabPanelRef.current.scrollLeft(newScrollValue);
  }
  /**
   * Scroll left button handler
   */


  scrollLeft() {
    const {
      clientWidth,
      scrollLeft
    } = this.tabPanelRef.current.getValues();
    const scrollStep = Math.ceil(clientWidth / 3);
    let newScrollValue = scrollLeft - scrollStep;

    if (newScrollValue <= 0) {
      newScrollValue = 0;
    }

    this.tabPanelRef.current.scrollLeft(newScrollValue);
  }
  /**
   * Get current tab items sizes and offset
   *
   * @return {Array} - array sizes and offset tab buttons
   */


  getTabsSize() {
    let tabsSize = [],
        tabNodes = this.tabItemsRef.current.childNodes;
    tabNodes.forEach(node => {
      let {
        offsetLeft,
        offsetWidth
      } = node;
      tabsSize.push({
        offsetLeft,
        offsetWidth
      });
    });
    return tabsSize;
  }

}

Tabs.displayName = "Tabs";
Tabs.defaultProps = {
  activeTabIndex: 0,
  selectTab: null
};
Tabs.propTypes = {
  activeTabIndex: PropTypes.number,
  // active tab index
  selectTab: PropTypes.func // tab select handler

};
export default Tabs;