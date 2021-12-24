import React from 'react'
import { CommentContain,CountLikes } from '../styles/styleGlobal'
const Comment = ({score,user,username,createdAt,content}) => {
    console.log(user)
    return (
        <CommentContain>
            <CountLikes>
                <span>+</span>
                <span>{score}</span>
                <span>-</span>
            </CountLikes>
            <div className='comment'>
                <div className='person'>
                    <img src={user.image.png} />
                    <b>{username}</b>
                    <p>{createdAt}</p>
                </div>
                <p>{content}</p>
                <button>
                    Reply
                </button>
            </div>
        </CommentContain>
    )
}

export default Comment
