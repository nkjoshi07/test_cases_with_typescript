import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { add } from './Math';


export default class Mock extends Component<any, any> {

    render() {
        return (
            <div>
                <Button onClick={() => add(1, 2)}>

                </Button>
            </div>
        );
    }
}
