import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  if(index === 'last') index = context.order?.length - 1
  

  return (
    <>
      <Layout>
      <div className="flex  w-80 items-center relative justify-center ">
          <Link to='/my-orders' className="absolute left-0 mb-2">
            <ChevronLeftIcon className="size-6 text-black cursor-pointer "  />
          </Link>
          <h1>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.product.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                    />
                ))
            }
            </div>
      </Layout>
      
    </>
  )
}

export default MyOrder
