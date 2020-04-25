import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: new Date()
        };
        this.tick = this.tick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick () {
        this.setState({
            time: new Date()
        })
    }

    handleClick (event) {
        event.preventDefault();
        alert('YOu just clicked the link')
    }

    render () {
        return (
            <div>
                <h1>The day is {this.state.date.toLocaleDateString()}</h1>
                <h1>The current time is:</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>

                <a href="google.com" onClick={this.handleClick}>
                    Click the link!
                </a>
            </div>
        )
    }
}