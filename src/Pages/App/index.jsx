import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context';

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

import './App.css'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedsignOut = JSON.parse(signOut)

  // Has an Account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedsignOut

  let routes =  useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> :<Navigate replace to={'/sign-in'} /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
