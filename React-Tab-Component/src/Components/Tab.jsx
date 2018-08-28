import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import Context from '../tab-context';

export default class Tab extends Component {
    render() {
        const { tabIndex, tabHeader } = this.props;
        return (
            <Context.Consumer>{
                ({ onSelectedTabIndexChange, selectedTabIndex }) =>
                    <li key={tabIndex} className={`la-tabs-nav-list-item ${selectedTabIndex === tabIndex ? "isSelected" : ""}`}>
                        <a className={`la-tabs-nav-link`}
                            onClick={() => onSelectedTabIndexChange(tabIndex)}>{tabHeader}</a>
                    </li>
            }</Context.Consumer>);
    }
};

Tab.defaultProps = {
    tabHeader: "",
    isSelected: true
}

Tab.propTypes = {
    tabHeader: PropTypes.string,
    isSelected: PropTypes.bool
}