// import React from 'react'

// function Pokemon({name,image}) {
//   return (
//     <div>
//         <div>{name}</div>
//         <div><img src={image}/></div>
//     </div>
   
//   )
// }

// export default Pokemon




function Pokemon({ name, image }) {
    return (
      <div className="p-4 text-center border rounded shadow-md">
        <h2 className="mb-2 text-xl font-bold capitalize">{name}</h2>
        <img src={image} alt={name} className="mx-auto w-28 h-28" />
      </div>
    );
  }
  export default Pokemon;