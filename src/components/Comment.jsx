import React,{useState,useRef} from 'react'
import { CommentContain,CountLikes,ButtonBd,UpdateComment } from '../styles/styleGlobal'
import plus from '../../images/icon-plus.svg'
import minus from '../../images/icon-minus.svg'
import ButtonsCrud from './ButtonsCrud'
import Input from './Input'
const Comment = ({userProps,user:username,replice,i,deleteComment}) => {
    const inputUpdate = useRef(null)
    const inputreply = useRef(null)

    const [userData,setUserData] = useState({...userProps})
    const [stateReply,setStateReply] = useState(false)
    const [stateUpdate,setStateUpdate] = useState(false)
    const [like,setLike] = useState(false)
    const {score,user,createdAt,content} = userData

    // elimina el comentario o replice, dependera de lo se le pase, y le pasamos como parametro la posicion en el array.
    const deleteCommentReplice = () => deleteComment(i)
    // actualiza el score, n es para saber si sube o bajan los likes
    const updateScore = n => setUserData({...userData,score:score + n})
    // actualiza el comentario del nuestro usuario
    const updateContent = content => {
        if(content){
            setUserData({...userData,content})
            setStateUpdate(false)
        }
    }
    const reply = e => {
        const content = inputreply.current.value
        if(content){
            replice(e,content,user.username)
            setStateReply(false)
        }
    }

    return (
        <CommentContain>
            <div className="containComment">
                <CountLikes>
                    <img src={plus} alt="" onClick={() => {
                        !like && updateScore(1)
                        setLike(true)
                    }} />
                    <span>{score}</span>
                    <img src={minus} alt="" onClick={() => {
                        like && score > 0 && updateScore(-1)
                        setLike(false)
                    }} />
                </CountLikes>
                <div className='comment'>
                    <div className='person'>
                        <img src={user.image.png} />
                        <b>{user.username}</b>
                        <p>{createdAt}</p>
                    </div>
                    {!stateUpdate 
                        ? 
                            <p>{content}</p> 
                        : 
                            <UpdateComment>
                                <textarea ref={inputUpdate} defaultValue={content}/>
                                <ButtonBd 
                                    onClick={() => updateContent(inputUpdate.current.value)}
                                >
                                    UPDATE
                                </ButtonBd>
                            </UpdateComment>
                    }
                    <ButtonsCrud 
                        user={user} 
                        username={username.username} 
                        stateReply={stateReply}
                        setStateReply={setStateReply}
                        updateContent={updateContent}
                        stateUpdate={stateUpdate}
                        setStateUpdate={setStateUpdate}
                        deleteCommentReplice={deleteCommentReplice}
                        i={i}
                    />
                </div>
            </div>
            {stateReply && 
                <Input 
                    input={inputreply} 
                    img={username.image.png} 
                    newComment={reply}
                    userReply={user.username}
                    buttonText='REPLY'
                />
            }
        </CommentContain>
    )
}

export default Comment
