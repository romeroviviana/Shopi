import Layout from "../../Components/Layout"
import OrdersCard  from "../../Components/OrdersCard"
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)
    return (
      <>
        <Layout>
        <h1 className="mb-5 font-medium text-xl">My Orders</h1>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}/>
              
            </Link>

          ))
        }
        </Layout>
        
      </>
    )
  }
  
  export default MyOrders
  