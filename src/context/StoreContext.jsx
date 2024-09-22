import { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/assets";

// creating context api 

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            // set key -> itemId val  = 1 if first time added
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            // increment by 1
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
                // price * quantity
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    useEffect(()=>{

    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider