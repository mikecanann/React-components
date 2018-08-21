import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LaTabs, LaTab } from '../src';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isSelected: false };
    }

    onChangeDefaultSelectedTabClick() {
        this.setState((prevState, _) => {
            return { isSelected: !prevState.isSelected };
        });
    }

    render() {
        return (
            <div>
                <LaTabs>
                    <LaTab tabHeader="head1" isSelected={this.state.isSelected}>Content Tab1 </LaTab>
                    <LaTab tabHeader="head2" isSelected={false}>Content Tab2 </LaTab>
                    <LaTab tabHeader="head3" isSelected={!this.state.isSelected}> Content Tab3 </LaTab>
                </LaTabs>
                <hr></hr>
                <button onClick={() => this.onChangeDefaultSelectedTabClick()}>Change default selected tab</button >
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));