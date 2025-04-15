import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout, Login } from './components/index.js'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from "./pages/AllPosts.jsx"
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children:[
    {
      path:'/',
      element:<Home />,
    },
    {
      path:'/login',
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      ),
  },
  {
    path : "/signup",
    element: (
      <AuthLayout authentication= {false}>
        <Signup />
      </AuthLayout>
    ),
  },
  {
    path: "/all-posts",
    element: (
      <AuthLayout authentication>
        <AllPosts />
      </AuthLayout>
    ),
  },
  {
    path:"/add-post",
    element:<AuthLayout  authentication>
      <AddPost />
    </AuthLayout>
  }
  ,
  {
    path: "/edit-post/:slug",
    element: (<AuthLayout authentication>
      <EditPost />
    </AuthLayout>
    ),
  },
  {
    path: "/post/:slug",
    element: <Post />,
  },
],

},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <RouterProvider router={router}/>
    </Provider>
   
  </StrictMode>,
)
