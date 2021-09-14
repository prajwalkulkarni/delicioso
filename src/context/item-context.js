import React,{useReducer} from "react";
const ItemContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    rmItem:(id)=>{},
    clearCart:()=>{}
})
export default ItemContext

const initCartState = {
    items:[],
    totalAmount:0
}
const reducer = (state,action)=>{

    if(action.type==="ITEM"){

        let replicateItems = [...state.items]
        const updatedTotalAmount = state.totalAmount + (action.quantity*action.amt)

        let itemIndex = state.items.findIndex(obj=>obj.name===action.name)
        
        let currItem = state.items[itemIndex]
        console.log(itemIndex,currItem)
        if(currItem){
            //alert("exists")
            //currItem.amt = updatedTotalAmount
            //alert(currItem)
            currItem.quantity = parseInt(currItem.quantity) + parseInt(action.quantity)
            //replicateItems[itemIndex] = currItem
            //alert(JSON.stringify(replicateItems))
            state.items[itemIndex] = currItem
            replicateItems = [...state.items]
            //console.log(replicateItems)

        }
        else{
            //alert("run")
            replicateItems = replicateItems.concat({id:Math.random()*Math.random(),name:action.name,quantity:action.quantity,amt:action.amt})

        }

        return {
            items:replicateItems,
            totalAmount:updatedTotalAmount
        }

    }

    if(action.type==="REMOVE"){
        let replicateItems = [...state.items]
        

        let currItemIndex = state.items.findIndex(arg=>arg.id===action.id)
        let currItem = state.items[currItemIndex]
        const updatedTotalAmount = state.totalAmount - currItem.amt
        //console.log(currItemIndex,currItemIndex)

        if(currItem.quantity<2){
            replicateItems = replicateItems.filter(obj=>obj.id!==currItem.id)
        }
        else{
            //console.log(currItem)
            currItem.quantity = parseInt(currItem.quantity)-1
            replicateItems[currItemIndex] = currItem

        }
        return {
            items:replicateItems,
            totalAmount:updatedTotalAmount
        }

    }

    if(action.type==="CLEAR"){
        return initCartState
    }
    return initCartState

}
export const ItemContextProvider = props =>{

    
    //const [amt, setAmt] = useState(0)
    const [item,dispatchCartAction] = useReducer(reducer,initCartState)

    const addItemToCartHandler = (itemData) =>{
        dispatchCartAction(itemData)
    }

    const removeItemFromCartHandler = (id) =>{
        dispatchCartAction(id)
    }
    
    const clearCartHandler = () =>{
        dispatchCartAction({type:"REMOVE"})
    }

    

    return (<ItemContext.Provider value={{items:item.items,totalAmount:item.totalAmount,addItem:addItemToCartHandler,rmItem:removeItemFromCartHandler,clearCart:clearCartHandler}}>
        {props.children}
    </ItemContext.Provider>)
}

