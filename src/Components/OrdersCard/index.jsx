import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex justify-between items-center mb-2 border border-black">
            <p>
                <span>01.02.24</span>
                <span>{totalPrice}</span>
                <span>{totalProducts}</span>
            </p>
        </div>
    )
}

export default OrdersCard