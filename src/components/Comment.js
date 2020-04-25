import React from 'react';
import UserInfo from "./UserInfo";
import CommentDetails from "./CommentDetails"


const Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <CommentDetails
                text={props.text}
                date={props.date}
            />
        </div>
    );
}

export default Comment;