import './Modal.css'
import  ReactDOM from 'react-dom'
import React from 'react'

const Backdrop = props =>{

    return <div className='modal-bg'/>
        
}
const ModalOverlay = props=>{

    return(
        
            <div className='modal-overlay'>
                {props.children}
            </div>
        
    )
}

const Modal = props =>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<ModalOverlay children={props.children}/>,document.getElementById("modal"))}
        </React.Fragment>
        
    )
}
export default Modal