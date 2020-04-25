import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../App.css'

export default class ChildOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:   this.props.name,
            brother: this.props.brother
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name !== prevState.name) {
            return {
                name: nextProps.name,
                brother: nextProps.brother
            };
        }   else return null;
    }

    render () {
        return (
            <Grid item xs={6} className="child">
                <h1>First Born Son</h1>
                <h2>Name: {this.state.name}</h2>
                <h2>Brother: {this.state.brother}</h2>
                <button onClick={this.props.changeName}>
                    Change The Names!
                </button>
            </Grid>
        )
    }
}