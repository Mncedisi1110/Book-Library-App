import { useEffect, useState } from "react";
//import axios from "axios"

function Categories (){
     const [categories,setCategories] = useState([]);
  
      
      useEffect(()=>{
         fetch("https://wolnelektury.pl/api/genres/")
          
          .then( (resp)=>{
             return resp.json();
          })
          .then(data =>{
             console.log(data)
              setCategories(data)
             
          })
          .catch(err => {
            console.log("Failed to fetch categories",err)
          })
          },[])
  
    return(
        <body className="bg-gray-800">
        <div className="grid grid-cols-4">
            {categories.map(categorie =>(
                <div className="px-5 py-5 text-cyan-500 font-serif" key={categorie.id}>
                    {categorie.name}<br/>
                    <button className="bg-orange-400 text-gray-800 border-amber-100 shadow-gray-400 width-30
                     rounded font-medium"><a href={categorie.url}>View</a></button>
                    </div>
            ))}
        </div>
        </body>
     
       
    )
}

export default Categories;