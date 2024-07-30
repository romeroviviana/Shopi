import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex  items-center border border-black w-80 p-4 rounded-lg mb-4  ">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.24</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className=' text-2xl font-medium'>${totalPrice}</span>
                    <ChevronRightIcon className="size-6 text-black cursor-pointer "  />

                </div>
            </div>
        </div>
    )
}

export default OrdersCard