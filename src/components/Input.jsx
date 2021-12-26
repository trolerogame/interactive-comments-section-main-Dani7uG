import React from 'react'
import { ButtonBd,Form } from '../styles/styleGlobal'
const Input = ({input,img,newComment,buttonText,userReply}) => {
    return (
      <Form onSubmit={newComment} >
        <img src={img} alt="" />
        <textarea autoFocus ref={input} defaultValue={userReply ? `@${userReply}` : ''}/>
        <ButtonBd>{buttonText || 'SEND'}</ButtonBd>  
      </Form>
    )
}

export default Input
