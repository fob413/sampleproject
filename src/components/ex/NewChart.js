import React from 'react';
import { FlowChartWithState, INodeDefaultProps } from '@mrblenny/react-flow-chart';
import { actions } from "@mrblenny/react-flow-chart/src";
import styled from 'styled-components';
import { chartSimple} from "./Chart";
import './style.css';
import {CCircle} from "./circle";
import {CBox} from "./box";
import mapValues from "@mrblenny/react-flow-chart/src/container/utils/mapValues";

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
  width: 150px;
  height: 150px;
`;

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
    } else {
        return (
            <Box ref={ref} {...otherProps}>
                {children}
            </Box>
        )
    }
});

export default class NewChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartState: chartSimple
        }

        this.saveme = this.saveme.bind(this);
    }

    saveme(event) {
        event.preventDefault();
        debugger;
        console.log('save now')
    }

    render () {
        const stateActions = mapValues(actions, (func) =>
            (...args) => this.setState(func(...args)))

        return (
            <div className='main'>

                <div className="left">
                    <FlowChartWithState
                        initialValue={this.state.chartState}
                        config={{
                            snapToGrid: true,
                        }}
                        Components={{
                            Node: NodeCustom,
                        }}
                        callbacks={stateActions}
                    />
                </div>

                <div className="right">

                    <div className='rLeft'>

                        <CBox
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

                    </div>


                    <div className='rRight'>

                        <CCircle
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

                    </div>

                    <button onClick={this.saveme}>Save</button>


                </div>

            </div>
        )
    }
}
