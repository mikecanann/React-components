import React, { Component } from 'react';
import Context from '../tab-context';
import { mergeClassName } from '../utils';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        let selectedTab = props.children[0];

        props.children.some(tab => {
            if (tab.props.isSelected) {
                selectedTab = tab;
                return true;
            }
        });
        this.state = {selectedTab};
        this.onSelectedTabIndexChange = this.onSelectedTabIndexChange.bind(this);
    }

    onSelectedTabIndexChange(tab) {
        if(this.state.selectedTab != tab){
            this.setState({ selectedTab: tab });
        }
    }

    render() {
        return (<Context.Provider value={({ ...this.state, onSelectedTabIndexChange: this.onSelectedTabIndexChange })}>
            <div className={mergeClassName(this.props, 'la-tabs')}>
                <ul className="la-tabs-nav">
                    {this.props.children}
                </ul>
                <div className="la-tabs-selected-tab-content">
                    {this.state.selectedTab.children}
                </div>
            </div>
        </Context.Provider>);
    }
};