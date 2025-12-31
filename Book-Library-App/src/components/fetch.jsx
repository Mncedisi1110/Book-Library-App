import { useEffect, useState } from "react";

function FetchBooks(){
    const [books, setBooks] = useState(null);

    useEffect(() =>{
        fetch("https://openlibrary.org/dev/docs/api/search_inside")
        .then((res) => {res.json();
        })
        .then((data) => {
          setBooks(data);
        })
    
    })
    return(
 <div>
      {books && books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
    </div>))}
    </div>
    )
}

export default FetchBooks; 
