import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.cartProducts)

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
            <div className='p-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu