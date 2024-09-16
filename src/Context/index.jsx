import { createContext, useState } from "react";
import {  useEffect } from "react";

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem("account")
    const signOutInLocalStorage = localStorage.getItem("sign-out")
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage){
        localStorage.setItem("account", JSON.stringify({}))
        parsedAccount = {}
    }
    else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage){
        localStorage.setItem("sign-out", JSON.stringify(false))
        parsedSignOut = false
    }
    else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({ children }) => {
    // My account
    const [account, setAccount ] = useState({})
    
    // My sign out
    const [signOut, setSignOut ] = useState(false)

    // Cart increment
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
    
    //gEt product by category
    const [searchByCategory, setSearchByCategory ] = useState(null)


    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])

    const filteredItemByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE') {
            return filteredItemByTitle(items, searchByTitle)
        }

        if(searchType === 'By_CATEGORY') {
            return filteredItemByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType ) {
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFiltersItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setFiltersItems(filterBy('BY_TITLE',items, searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFiltersItems(filterBy('By_CATEGORY',items, searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setFiltersItems(filterBy(null,items, searchByTitle,searchByCategory))
        
    }, [items, searchByTitle,searchByCategory])

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
            filterItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut,
            initializeLocalStorage
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}