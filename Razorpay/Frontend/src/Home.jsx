import React from 'react'

// import card from './card';



function Home({name,image}) {
  

   return  (
    
    <div className="border rounded-lg shadow-md p-4 w-64">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <button>Buy now</button>
    
    </div>
  );
}

export default Home;