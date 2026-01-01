import Home from './components/Home';
import Categories from "./components/Categories";
import ReadList from "./components/ReadList";
import About from "./components/About";
import SearchList from './components/searchlist';
import Navbar from "./components/Navbar"
import SearchBar from './components/searchbar';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import { useState } from 'react';



  function App() {
    const[results,setResults] =useState ([])

  return (
  <div>
    
       
    <BrowserRouter>
    <div className='flex items-center align-top justify-start bg-gray-700'>
     <h1 className="text-cyan-600 font-bold text-3xl pb-4">Book Library</h1> 
     <div className='pl-20 pt-2 pb-4'>
      <Navbar />
      </div>
      <div className='pl-20'>
      <SearchBar setResults={setResults} />
      <SearchList results={results} />
      </div>
     
    </div>
  
    <Routes>
      <Route index element = {<Home />} />
      <Route path = "/Home" element = {<Home />} />
      <Route path = "/Categories" element = {<Categories />} />
      <Route path = "/ReadList" element = {<ReadList />} />
      <Route path = "/About" element = {<About />} />
      
    </Routes>
    </BrowserRouter>
  </div>
  )
  }

  export default App;