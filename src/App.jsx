import React,{useRef,useState} from 'react'
import {StyleGlobal,ContainComments} from './styles/styleGlobal'
import Comments from './components/Comments'
import Input from './components/Input'
import data from './data.json'
function App() {
  const [dataArr,setDataArr] = useState([...data.comments])
  const input = useRef(null)
  //crea el comentario, le crea la estructura y lo agrega al dataArr para que lo muestre en pantalla
  const newComment = e => {
    e.preventDefault()
    let comment = input.current.value
    if(comment){
      const {image,username} = data.currentUser
      const newCo = {
        id:dataArr[dataArr.length - 1].id + 1,
        content: comment,
        createdAt: "2 days ago",
        score:0,
        user:{
          image,
          username,
        },
        replies:[]
      }
      setDataArr([...dataArr,newCo])
    }
  }
  // elimina un comentario filtrandolo por index
  const deleteComment = comment => {
    const newDataArr = dataArr.filter((elem,i) => i !== comment)
    setDataArr(newDataArr)
  }

  return (
    <>
      <StyleGlobal/>
      <div>
        <ContainComments>
          {dataArr.map((elem) => 
            <Comments 
              userProps={elem} 
              key={elem.id} 
              user={data.currentUser}
              deleteComment={deleteComment}
            /> 
          )}
        </ContainComments>
      </div>
      <Input input={input} img={data.currentUser.image.png} newComment={newComment}/>
    </>
  )
}

export default App
