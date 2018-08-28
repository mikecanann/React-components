import React, { Component } from 'react';
import Context from '../tab-context';
import { mergeClassName, getSelectedTabIndex } from '../utils';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabIndex: getSelectedTabIndex(props.children),
            tabs: props.children
        };
        this.onSelectedTabIndexChange = this.onSelectedTabIndexChange.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.children !== state.tabs) {
            return {
                selectedTabIndex: getSelectedTabIndex(props.children),
                tabs: props.children
            }
        }

        return null;
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
                <div className="la-tabs-nav">
                    <ul className="la-tabs-nav-list">
                        {this.props.children.map((tab, index) =>
                            React.cloneElement(tab, { tabIndex: index, key: index }))}
                    </ul>
                </div>
             
                <div className="la-tabs-selected-tab-content">
                    {this.props.children[selectedTabIndex].props.children}
                </div>
            </div>
        </Context.Provider>);
    }
};