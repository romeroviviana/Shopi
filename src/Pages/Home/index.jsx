import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from '../../Components/Card';
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.searchByTitle?.length > 0){
      if(context.filterItems?.length > 0){
        return(
          context.filterItems?.map(item => (
            <Card data={item} key={item.id} />
          ))
        )

      }
      else {
        <div>We don't have anything :(</div>
      }
    }
    else {
      return(
        context.items?.map(item => (
          <Card data={item} key={item.id} />
        ))

      )
    }
  }
  
  return (
    <>
      <Layout >
        <h1 className="mb-5 font-medium text-xl">Exclusive Products</h1>

        <input 
          type="text" 
          placeholder="Search a product"
          className="border rounded-lg border-black w-80 p-4 mb-10 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value) }
        />

        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { renderView() } 
        </div>
        <ProductDetail/>
        
      </Layout>
      
    </>
  )
}

export default Home
