import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-1">{data.data.category.name}</span>
                <img src={data.data.images[0].replace('["','').replace('"]','')} alt={data.data.title} className=" w-full h-full object-cover rounded-lg" />
                <div 
                    className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={ () => context.setCount(context.count + 1)}>
                    +
                </div>
            </figure>
            <p className=" flex justify-between align-middle">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card