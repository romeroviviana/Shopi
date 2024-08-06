import { createContext, useState } from "react";
import {  useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount ] = useState(0)

    // Product Detail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Product Detail - show product
    const [productToShow, setProductToShow ] = useState({})

    //Shoppi Cart - Add products to cart
    const [cartProducts, setCartProducts ] = useState([])
    
    // Ckeckout Side Menu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    
    // Shoppoing Cart . Order
    const [order, setOrder ] = useState([])

    // get products
    const [items, setItems ] = useState(null)
    const [filterItems, setFiltersItems ] = useState(null)

    //gEt product by title
    const [searchByTitle, setSearchByTitle ] = useState(null)


    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])

    const fireredItemByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    

    useEffect(() => {
        if(searchByTitle) setFiltersItems(fireredItemByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filterItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}