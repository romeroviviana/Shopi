import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'


const ProductDetail = () => {
    return(
        <aside className="product-detail flex flex-col fixed right-0 border-black border rounded-sm bg-white ">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className="size-6 text-black" />

                </div>
            </div>
        </aside>
    )
}

export default ProductDetail