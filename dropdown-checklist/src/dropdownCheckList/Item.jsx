﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import CheckItem from './CheckItem';

export default class Item extends Component {
    onExpandClick = (e) => {
        this.props.onExpandClick(e);
    }

    render() {
        var { item, options} = this.props;
        var { singleSelect, dataKeyName, listItemClassName, dropdownName } = options;

        var levelClassName = " level-" + item.level;
        var singleClassName = singleSelect === item.level ? " single " : "";
        var expandedClassName = item.expanded ? " expanded " : "";
        var rootClassName = item[dataKeyName] === 0 ? " root " : "";

        var expandElement;
        var childElements;

        if (item.items && item.items.length > 0) {
            let attributeKey = { 'data-key': item[dataKeyName] }
            expandElement = <div className="ddcl__expand" {...attributeKey} onClick={this.onExpandClick}></div>
            childElements = <ListItems items={item.items} 
                                        options={options}
                                        onCheckChanged = {this.props.onCheckChanged}
                                        onExpandClick = {this.props.onExpandClick}/>
        }
        
        return (
            <li className={listItemClassName + expandedClassName + singleClassName + rootClassName + levelClassName}>
                <CheckItem item={item} options={options} onCheckChanged={this.props.onCheckChanged}/>
                {expandElement}
                {childElements}
            </li>
        );
    }
};