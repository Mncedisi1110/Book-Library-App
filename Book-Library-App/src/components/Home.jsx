import BookDetails from "./Bookdetails";
import { useState,useEffect } from "react";



function Home() {
 
      const [books,setBooks] = useState([]);
      const [viewbook,setViewBook] = useState(null)
   
       
       useEffect(()=>{
          fetch("https://wolnelektury.pl/api/books/")
           
           .then( (resp)=>{
              return resp.json();
           })
           .then(data =>{
              console.log(data)
               setBooks(data)
              
           })
           .catch(err =>{
            console.log("Failed to fetch books",err)
           })
         },[]);
    
const handleBookdetails =(Book) =>{
   setViewBook(Book)
}

  return (
  <body className="bg-gray-800">
     <h1 className="text-cyan-600 font-bold text-xl justify-center py-4 pl-100">All Books</h1>
       {viewbook ? (
        <BookDetails Book={viewbook} />):(
     <div  className ="grid grid-cols-4 text-gray-200 px-4">
      
            {books.slice(0,832).map(Book =>(
                <div className="px-5 py-5 text-cyan-500 font-serif" key={Book.id}>
                  <img style={{color:"blue"}} src={Book.cover_thumb}/>
                    {Book.title}<br/>
                     <button className="bg-orange-400 text-gray-800 border-amber-100 shadow-gray-400 width-30
                     rounded font-medium" onClick={() => handleBookdetails(Book)}>
                View Details
              </button>
                    
                    </div>
            ))}
        </div>)}
  </body>
  )
}
export default Home;