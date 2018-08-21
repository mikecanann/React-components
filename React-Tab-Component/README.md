React-Tab-Component
=========================
## Basic Usage
```javascript
import React, { Component } from 'react'
import { LaTabs, LaTab } from '../src';

class Example extends Component {
    render() {
        return <div>
            <LaTabs>
                <LaTab tabHeader="head1" isSelected={true}>Content Tab1</LaTab>
                <LaTab tabHeader="head2" isSelected={false}>Content Tab2</LaTab>
                <LaTab tabHeader="head3" isSelected={false}>Content Tab3</LaTab>
            </LaTabs>
        </div>
    }
}
```