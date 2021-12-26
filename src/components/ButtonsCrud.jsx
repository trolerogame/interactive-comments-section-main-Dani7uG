import React from 'react'
import { ButtonNotBd } from '../styles/styleGlobal'
import reply from '../../images/icon-reply.svg'
import edit from '../../images/icon-edit.svg'
import deletee from '../../images/icon-delete.svg'
const ButtonsCrud = ({user,username,stateReply,setStateReply,stateUpdate,setStateUpdate}) => {
    return (
        <ButtonNotBd color='hsl(238, 40%, 52%)' two={user.username !== username ? '1' : '2'}>
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
                        <button className="delete">
                            Delete
                        </button>
                    </div> 
                    <div>
                        <img src={edit}/>
                        <button onClick={() => setStateUpdate(!stateUpdate)}>
                            Update
                        </button>
                    </div>
                </>
            }
        </ButtonNotBd>
    )
}

export default ButtonsCrud
