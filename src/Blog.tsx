import React, { Component } from 'react';

interface blogStateType {
    number: number
}
export default class Blog extends Component<any, blogStateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div>
                <button
                    className='add'
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >plus</button>
                <h1>{this.state.number}</h1>
                <button
                    className='minus'
                    onClick={() => this.setState({ number: this.state.number - 1 })}
                >minus</button>
            </div>
        );
    }
}
