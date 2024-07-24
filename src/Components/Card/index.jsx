import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'


const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    let productImage = data.data.images
    productImage = JSON.parse(productImage)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart =  (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
        
    }


    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id ).length > 0

        if (isInCart) {
            return(
            <div 
                className=" absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1 text-white">
                <CheckIcon/>
            </div>
            )
        }
        else {
            return(
                <div 
                className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick={ (event) => addProductsToCart(event, data.data)}>
                <PlusIcon />
            </div>
            )
        }
        
    }
    return (
        <div 
            onClick={ () => showProduct(data.data)}
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
             >
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-1">{data.data.category.name}</span>
                <img src={productImage} alt={data.data.title} className=" w-full h-full object-cover rounded-lg" />
                {renderIcon(data.data.id)}
            </figure>
            <p className=" flex justify-between align-middle">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card