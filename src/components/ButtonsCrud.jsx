import React,{useState} from 'react'
import { ButtonNotBd } from '../styles/styleGlobal'
import reply from '../../images/icon-reply.svg'
import edit from '../../images/icon-edit.svg'
import deletee from '../../images/icon-delete.svg'
import Modal from './Modal'
const ButtonsCrud = ({user,username,stateReply,setStateReply,stateUpdate,setStateUpdate,deleteCommentReplice}) => {
    const [del,setDelete] = useState(false)
    return (
        <ButtonNotBd color='hsl(238, 40%, 52%)'>
            {user.username !== username ? 
                <div>
                    <img src={reply}/>
                    <button onClick={() => setStateReply(!stateReply)}>
                        Reply
                    </button>
                </div>
            :
                <>
                    <div>
                        <img src={deletee} />
                        <button className="delete" onClick={() => setDelete(true)}>
                            Delete
                        </button>
                    </div> 
                    <div>
                        <img src={edit}/>
                        <button onClick={() => setStateUpdate(!stateUpdate)}>
                            Update
                        </button>
                    </div>
                    {del && <Modal setDelete={setDelete} deleteCommentReplice={deleteCommentReplice}/>}
                </>
            }
        </ButtonNotBd>
    )
}

export default ButtonsCrud
