import React from 'react'
import {StyleGlobal} from './styles/styleGlobal'
import Comment from './components/Comment'
import data from './data.json'
function App() {
  return (
    <>
      <StyleGlobal/>
      <div>
        <div>
          <Comment {...data.comments[0]}></Comment>
        </div>
      </div>
    </>
  )
}

export default App
