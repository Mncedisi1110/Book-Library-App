import {FaSearch} from "react-icons/fa"
import { useState } from "react";

function SearchBar ({setResults}) {
    const [input, setInput] =useState("");

  

    function fetch(){
        fetchbook("https://openlibrary.org/dev/docs/api/search_inside")
        .then(response => {
            response.json()
        })
        .then(res =>{
            const results = res.filter((book)=>{
                return value && book.name && book.author && book.toLowerCase
            });
            setResults(results);
        })
    }

      const handleChange = (e)=> {
       setInput(e.target.value);
       fetch(e.target.value);
    }
    return(
        <div className="flex justify-center items-center bg-gray-200 rounded h-6 w-60">
            <div className="text-cyan-500 pl-2"><FaSearch /></div>
        <input className="pl-3 text-cyan-500 outline-0" name="text" placeholder="Search for books" value={input} onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;