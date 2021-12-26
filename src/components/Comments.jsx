import React,{useState} from 'react'
import Comment from './Comment'
import {Replices} from '../styles/styleGlobal'
const Comments = ({userProps,user,deleteComment}) => {
    const [replices,setReplices] = useState(userProps.replies)

    // elimina el comentario en replices
    const deleteReplices = replice => {
        const newDataReplices = replices.filter((elem,i) => i !== replice)
        setReplices(newDataReplices)
    }
    // crea el comentario haciendo la estructura, y lo guarda en el array
    const replice = (e,content,userReplices) => {
        e.preventDefault()
        const {image,username} = user
        const newReplices = {
            id:replices.length ? replices[replices.length - 1].id + 1 : 1,
            content,
            createdAt: "2 days ago",
            score:0,
            replyingTo:userReplices,
            user:{
              image,
              username,
            }
          }
        setReplices([...replices,newReplices])
    }

    return (
        <div>
            <Comment 
                deleteComment={deleteComment} 
                userProps={userProps} 
                user={user} 
                replice={replice}
            />
            <Replices>
                {replices.map(elem => 
                    <Comment 
                        userProps={elem} 
                        key={elem.id + 4} 
                        user={user}
                        deleteReplices={deleteReplices}
                        replice={replice}
                    />
                )}
            </Replices>
        </div>
    )
}

export default Comments
