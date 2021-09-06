import React from "react";

const ModalContext = React.createContext({
    isVisible:true,
    message:'dummy message',
    fn:()=>{},
    show:()=>{}
})

export default ModalContext