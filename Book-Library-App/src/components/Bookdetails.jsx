const BookDetails =({Book})=>{

 
 return (
    <div>
      <h2 className="text-cyan-500 font-bold text-xl">{Book.title} Details</h2>
      <p className="text-cyan-500 font-bold text-xl"><strong>Author:</strong> {Book.author}</p>
      <p className="text-cyan-500 font-bold text-xl"><strong>Genre:</strong> {Book.genre}</p>
      <button  className="text-cyan-500 font-bold text-xl bg-black border-white rounded shadow-white w-30"><a href={Book.url}>Read</a></button>
      </div>
 )
}

export default BookDetails;