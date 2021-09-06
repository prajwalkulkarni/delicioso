import Header from "./components/Layout/Header";
import React, { useState } from "react";
import ModalContext from "./context/modal-context";
import Cart from "./components/Cart/Cart";
import Food from "./components/Foods/Food";
import {ItemContextProvider} from "./context/item-context";
function App() {
  
  const [visible, setVisible] = useState(false)
  

  function show(){
    setVisible(true)
    //alert(visible)
  }
  function hide(){
    setVisible(false)
  }
  return (
    
    <React.Fragment>
      <ModalContext.Provider value={{isVisible:visible,message:'abc',fn:hide,show:show}}>
        <ItemContextProvider>
        {visible&&<Cart/>}
        
        
          <Header />
          <Food />
        </ItemContextProvider>
        
      </ModalContext.Provider>
    </React.Fragment>
  );
}

export default App;
