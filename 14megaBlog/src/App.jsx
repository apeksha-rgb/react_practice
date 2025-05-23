
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUser()
    .then((userData) => {
      if(!userData){
        return console.log("no user found Sigup / login to continue")
      }
      console.log("checking current session: ", userData)
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .catch((err)=> console.log("error in getCurrentUser", err))
    .finally(()=> setLoading(false))
  },[])


  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
        TODO : <Outlet /> 
      </main>
      <Footer/>
    </div>
  </div>) : null
}

export default App
