import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            product: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.setCount(0)
    }

    return(
        <aside 
            className={ `${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} ckeckout-side-menu flex-col fixed right-0 border-black border rounded-sm bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon 
                        className="size-6 text-black"  />

                </div>
                
            </div>
            <div className='p-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex items-center justify-between gap-2'>
                    <span>Total Price:</span>
                    <span className=' font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>

                <button 

                    className='w-full bg-black text-white py-3 rounded-lg mt-3'
                    onClick={() => {
                        handleCheckout()
                    }}
                >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu