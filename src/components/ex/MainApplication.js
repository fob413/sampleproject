import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FlowChartWithState } from '@mrblenny/react-flow-chart'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import TheNavigation from "./TheNavigation";
import { SidebarItem } from "./SidebarItem";
import { chartSimple} from "./Chart";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TheNavigation
                        bg="white"
                        type="Email"
                        ports={ {
                            port1: {
                                id: 'port1',
                                type: 'input'
                            },
                            port2: {
                                id: 'port2',
                                type: 'output'
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FlowChartWithState
                        initialValue={chartSimple}
                        config={{
                            snapToGrid: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SidebarItem
                        bg="white"
                        type="Email"
                        ports={ {
                            port1: {
                                id: 'port1',
                                type: 'input'
                            },
                            port2: {
                                id: 'port2',
                                type: 'output'
                            }
                        }}
                    />
                </Grid>

            </Grid>
        </div>
    );
}
