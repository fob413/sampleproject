import React from 'react'

const commentDetails = (props) => {
    return(
        <div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
             {props.date}
            </div>
        </div>
    )
}

export default commentDetails;