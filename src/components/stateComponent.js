import React from 'react';

export default class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'Funsho',
            age: 16,
            location: 'Lagos'
        };
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe (event) {
        event.preventDefault();

        this.setState({
            name: 'Tayo',
            age: '17'
        })
    }
    render () {
        return (
            <div>
                <h1>Hi There, {this.state.name}</h1>
                <button onClick={this.clickMe}>Click me!</button>
            </div>
        )
    }
}