import * as React from 'react'
import styled from 'styled-components'
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart'

const Box = styled.div`
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
  height: 70px;
  width: 70px;
`

export const CBox = ({ type, ports , properties }) => {
    return (
        <Box
            draggable={true}
            onDragStart={ (event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports , properties }))
            } }
        >
            <div className="" >
                {type}
            </div>
        </Box>
    )
}
