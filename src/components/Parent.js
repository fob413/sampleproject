import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../App.css'
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstChild: 'Tayo',
            secondChild: 'Funsho'
        };

        this.changeName = this.changeName.bind(this);
    }

    changeName (event) {
        event.preventDefault();
        this.setState({
            firstChild: 'Funsho',
            secondChild: 'Tayo'
        })
    }

    render() {

        return (
                <Grid container spacing={3} className="root">
                    <Grid item xs={12}>
                        <h1>The parent component</h1>
                        <ChildOne
                            name={this.state.firstChild}
                            brother={this.state.secondChild}
                            changeName={this.changeName}
                        />

                        <ChildTwo
                            name={this.state.secondChild}
                            brother={this.state.firstChild}
                            changeName={this.changeName}
                        />
                    </Grid>
                </Grid>
        )
    }
}