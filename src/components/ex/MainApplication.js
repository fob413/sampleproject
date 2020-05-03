import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FlowChartWithState, INodeDefaultProps } from '@mrblenny/react-flow-chart'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import TheNavigation from "./TheNavigation";
import { SidebarItem } from "./SidebarItem";
import { SideBox } from "./SideBox";
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

const Circle = styled.div`
  width: 150px;
  height: 150px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d30000;
  color: white;
  border-radius: 50%;
`

const Box = styled.div`
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
const NodeCustom = React.forwardRef(({ node, children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {
    if (node.type === 'box') {
      return (
        <Box ref={ref} {...otherProps}>
          {children}
        </Box>
      )
    } else if (node.type === 'circle') {
      return (
        <Circle ref={ref} {...otherProps}>
          {children}
        </Circle>
      )
    }
  })

export default function MainApplication() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TheNavigation
                        bg="white"
                        type="circle"
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
                        Components={{
                            Node: NodeCustom,
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Grid item xs={6}>
                            <SidebarItem
                                bg="white"
                                type="circle"
                                id='circle'
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
                            <SideBox
                                bg="white"
                                id="box"
                                type="box"
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
                </Grid>

                {/*<Grid item xs={6}>*/}
                {/*    <SideBox*/}
                {/*        bg="white"*/}
                {/*        type="box"*/}
                {/*        ports={ {*/}
                {/*            port3: {*/}
                {/*                id: 'port3',*/}
                {/*                type: 'input'*/}
                {/*            },*/}
                {/*            port4: {*/}
                {/*                id: 'port4',*/}
                {/*                type: 'output'*/}
                {/*            }*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Grid>*/}

            </Grid>
        </div>
    );
}
