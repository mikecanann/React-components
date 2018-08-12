import React, { Component } from 'react';
import Tab from './Tab';
import Context from '../tab-context';
import { mergeClassName } from '../utils';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.tabComponents = props.children;
        let selectedTabIndex = 0;
        this.tabComponents.some((tab, index) => {
            if (tab.props.isSelected) {
                selectedTabIndex = index;
                return true;
            }
        });
        this.state = {
            selectedTabIndex: selectedTabIndex
        };

        this.onSelectedTabIndexChange = this.onSelectedTabIndexChange.bind(this);
    }

    onSelectedTabIndexChange(tabIndex) {
        if(this.state.selectedTabIndex != tabIndex){
            this.setState({ selectedTabIndex: tabIndex });
        }
    }

    renderTabHeaderItems() {
        const { selectedTabIndex } = this.state;

        return this.tabComponents.map((item, index) =>
            <Tab key={index}
                tabIndex={index}
                tabHeader={item.props.tabHeader}
                isSelected={selectedTabIndex === index}>
            </Tab>
        );
    }

    renderSelectedTabContent() {
        const { selectedTabIndex } = this.state;
        var selectedTab = this.tabComponents[selectedTabIndex];

        return selectedTab && selectedTab.props.children;
    }

    render() {
        return (<Context.Provider value={({ ...this.state, onSelectedTabIndexChange: this.onSelectedTabIndexChange })}>
            <div className={mergeClassName(this.props, 'la-tabs')}>
                <ul className="la-tabs-nav">
                    {this.renderTabHeaderItems()}
                </ul>
                <div className="la-tabs-selected-tab-content">
                    {this.renderSelectedTabContent()}
                </div>
            </div>
        </Context.Provider>);
    }
};