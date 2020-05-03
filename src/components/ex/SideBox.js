import * as React from 'react'
import styled from 'styled-components'
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart'

const Box = styled.div`
  position: absolute;
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`

export const SideBox = ({ type, ports , properties , bg, id}) => {
    return (
        <Box
            draggable={true}
            onDragStart={ (event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ id, type, ports , properties }))
            } }
        >
            <div className="icon-container" >
                {type}
            </div>
        </Box>
    )
}
