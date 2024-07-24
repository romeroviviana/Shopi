import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { title, imageUrl, price } = props
    return(
        <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img src={imageUrl} alt={title} className='w-full h-full rounded-lg object-cover'/>
                </figure>
                <p className='font-light text-sm'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='font-bold text-medium'>{price}</p>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer"  />
            </div>
        </div>
    )
}

export default OrderCard