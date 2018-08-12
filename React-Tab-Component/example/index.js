import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LaTabs, LaTab } from '../src';

export default class App extends Component {
    render() {
        return (
            <LaTabs>
                <LaTab tabHeader="head1" isSelected={false}>Content Tab1 </LaTab>
                <LaTab tabHeader="head2" isSelected={false}>Content Tab2 </LaTab>
                <LaTab tabHeader="head3" isSelected={true}> Content Tab3 </LaTab>
            </LaTabs>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));