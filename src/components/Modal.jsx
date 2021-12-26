import React from 'react'
import { createPortal } from 'react-dom'
const Modal = () => <>{createPortal(<div>hola mundo</div>,document.getElementById('#portal'))}</>


export default Modal
