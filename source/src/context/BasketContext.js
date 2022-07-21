import React, { createContext, useContext, useEffect, useState } from 'react'

const BasketContext= createContext()


const BasketProvider= ({children}) => {

  const defaultItems=  JSON.parse(localStorage.getItem(`baskets`)) 
const [items,setItems]=useState(defaultItems)






useEffect(()=>{ 
  setTimeout(() => {
    localStorage.setItem(`baskets`,`${JSON.stringify(items)}`)
  }, 200);
},[items])

const addToBasket = async (data , findBasketItem) =>{
    if (!findBasketItem) {

      await  setItems([...items,data])
    }
    if (findBasketItem) {
        const filteredItems = await items.filter((i)=> i._id!=data._id)
        await  setItems(filteredItems)
    }
  


}

const values={items,setItems,addToBasket}

return (<BasketContext.Provider value={values}> {children}</BasketContext.Provider>)

}


const useBasket = ()=> useContext(BasketContext)

export {useBasket,BasketProvider}