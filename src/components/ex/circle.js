import * as React from 'react'
import styled from 'styled-components'
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart';

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

export const CCircle = ({ type, ports , properties }) => {
    return (
        <Circle
            draggable={true}
            onDragStart={ (event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports , properties }))
            } }
        >
            <div className="" >
                {type}
            </div>
        </Circle>
    )
}
