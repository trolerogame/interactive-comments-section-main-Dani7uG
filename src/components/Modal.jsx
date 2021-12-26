import React from 'react'
import { createPortal } from 'react-dom'
import {ModalStyle,ButtonBd,ModalContent} from '../styles/styleGlobal'
const Modal = ({setDelete,deleteCommentReplice}) =>
    <>
        {createPortal(
        <ModalStyle>
            <ModalContent>
                <h3>Delete comment</h3>
                <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className='buttons'>
                    <ButtonBd color='hsl(211, 10%, 45%)' onClick={() => setDelete(false)}>NO, CANCEL</ButtonBd>
                    <ButtonBd color='hsl(358, 79%, 66%)' onClick={() => {
                        setDelete(false)
                        deleteCommentReplice()
                    }}>YES, DELETE</ButtonBd>
                </div>
            </ModalContent>
        </ModalStyle>,
        document.getElementById('portal'))}
    </>


export default Modal
