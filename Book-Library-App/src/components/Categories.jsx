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
                <div className="py-5 px-6 text-gray-200" key={categorie.id}>
                    {categorie.name}
                    </div>
            ))}
        </div>
        </body>
     
       
    )
}

export default Categories;