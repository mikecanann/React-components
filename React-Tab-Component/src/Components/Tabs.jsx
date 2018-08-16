import React, { Component } from 'react';
import Context from '../tab-context';
import { mergeClassName } from '../utils';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        let selectedTabIndex = 0;
        props.children.some((tab, index) => {
            if (tab.props.isSelected) {
                selectedTabIndex = index;
                return true;
            }
        });

        this.state = { selectedTabIndex: selectedTabIndex };
        this.onSelectedTabIndexChange = this.onSelectedTabIndexChange.bind(this);
    }

    onSelectedTabIndexChange(tabIndex) {
        if (this.state.selectedTabIndex != tabIndex) {
            this.setState({ selectedTabIndex: tabIndex });
        }
    }

    render() {
        const { selectedTabIndex } = this.state;
        return (<Context.Provider value={({ selectedTabIndex: selectedTabIndex, onSelectedTabIndexChange: this.onSelectedTabIndexChange })}>
            <div className={mergeClassName(this.props, 'la-tabs')}>
                <ul className="la-tabs-nav">
                    {this.props.children.map((tab, index) =>
                        React.cloneElement(tab, { tabIndex: index, key: index }))}
                </ul>
                <div className="la-tabs-selected-tab-content">
                    {this.props.children[selectedTabIndex].props.children}
                </div>
            </div>
        </Context.Provider>);
    }
};