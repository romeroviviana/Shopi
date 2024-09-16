import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from "../ShoppingCart";



function Navbar() {
  const context = useContext(ShoppingCartContext)

  const activeItem = "underline underline-offset-4";

  // Sign Out
  const signOut = localStorage.getItem("sign-out")
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem("sign-out", stringifiedSignOut)
    context.setSignOut(true)
  }
  const renderView = () => {
    if(hasUserAnAccount && !isUserSignOut) {
      return(
        <>
          <li className="text-black">
            {parsedAccount?.email}
          </li>
          <li>
          <NavLink
              to='/my-orders'
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                My Orders
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/my-account'
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                My Account
            </NavLink>
          </li>
          <li>
          <NavLink
              to='/sign In'
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              onClick={()=> handleSignOut()}
              >
                Sign out
            </NavLink>
          </li>
          
        </>
      )
    }
    else {
      return(
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeItem : undefined }
            onClick={() => handleSignOut()}
          >
            Sign out
          </NavLink>
        </li>
      )
    }
  }
    return (
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
        <ul className="flex item-center gap-3">
          <li className="font-semibold "  >
            <NavLink
              to={`${isUserSignOut ? '/sign-in' : '/'}`}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                All
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clothes'
              onClick={() => context.setSearchByCategory('clothes')}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/electronics'
              onClick={() => context.setSearchByCategory('electronics')}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/furnitures'
              onClick={() => context.setSearchByCategory('furnitures')}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/toys'
              onClick={() => context.setSearchByCategory('toys')}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/others'
              onClick={() => context.setSearchByCategory('others')}
              className={({ isActive }) => [
                isActive ? activeItem : "" ,
              ]}
              >
                Others
            </NavLink>
          </li>
        </ul>

        <ul className="flex gap-3">
          {renderView()}
          <li className='flex items-center gap-1'>
            <ShoppingCart />
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar
  