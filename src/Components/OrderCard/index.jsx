import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    return(
        <div className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 min-w-20'>
                    <img src={imageUrl} alt={title} className='w-full h-full rounded-lg object-cover'/>
                </figure>
                <p className='font-light text-sm'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='font-bold text-medium'>{price}</p>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => { handleDelete(id) }} />
            </div>
        </div>
    )
}

export default OrderCard