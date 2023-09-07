import React from 'react'
import { BrowserRouter, Routes, Link, Route, } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePosts } from './pages';
const App = () => {
  return (
    <BrowserRouter>

    <header className='w-full flex justiify-between items-center bg-white
    sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <Link to='/'>

      <img src={logo} alt="logo" className='w-28 object-contain '/>
      

      </Link>

      <Link to='/createPosts' className='font-inter font-weight ml-auto bg-[#6469ff] text-white px-4 py-2 rounded-md'>
        Create 
      </Link>


    </header>

    <main className='sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createPosts' element={<CreatePosts/>}/>
         
      </Routes>
    </main>
      </BrowserRouter>
    
    )
}

export default App