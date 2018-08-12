import React, { Component } from 'react';
import Context from '../tab-context';

export default class Tab extends Component {
    render() {
        const { tabIndex, tabHeader, isSelected } = this.props;
        return (
            <Context.Consumer>{
                ({ onSelectedTabIndexChange }) =>
                    <li className={`la-tabs-nav-item ${isSelected ? "isSelected" : ""}`}>
                        <a className={`la-tabs-nav-link`} 
                            onClick={() => onSelectedTabIndexChange(tabIndex)}>{tabHeader}</a>
                    </li>
            }</Context.Consumer>);
    }
};