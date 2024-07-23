import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'



const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    let productImage = context.productToShow.images
    let newImage = JSON.parse(productImage)
    
    return(
        <aside 
            className={ `${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border-black border rounded-sm bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon 
                        className="size-6 text-black"  />

                </div>
                
            </div>
            <figure>
                    <img className='w-full h-full rounded-lg px-6' src={newImage} alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span> 
                    <span className='font-medium text-md'>{context.productToShow.title}</span> 
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
        </aside>
    )
}

export default ProductDetail