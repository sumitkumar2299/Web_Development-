import React from 'react';
import axios from 'axios';

function Products({ products }) {
  const checkoutHandler = async (amount) => {
    const { data: keyData } = await axios.get("/api/v1/getkey");
    const { key } = keyData;
    const { data: orderData } = await axios.post("/api/v1/payment/process", { amount });
    const { order } = orderData;

    const options = {
      key: key,
      amount: amount,
      currency: "INR",
      name: 'Sumit Kumar',
      description: "Razorpay Integration tutorial",
      order_id: order.id,
      callback_url: '/api/v1/paymentVerification',
      prefill: {
        name: "Sumit kumar",
        email: "sumit@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f37254"
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">
                Price: <strong className="text-green-600">{item.price}</strong>
              </p>
              <button
                onClick={() => checkoutHandler(item.price)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Pay ₹{item.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;





// import React from 'react';
// import axios from 'axios';

// function Products({products}) {
//   // console.log(props)
//   console.log(products)
//   const checkoutHandler = async(amount)=>{
//     const {data:keyData} = await axios.get("/api/v1/getkey")
//     const {key} = keyData
//     console.log(key);
//     console.log(amount)
//     const {data:orderData} = await axios.post("/api/v1/payment/process",{
//       amount
//     })
//     const {order} = orderData;
//     console.log(order); 
    
    
//     // very important

//     const options ={
//       key:key, // already key is destructured above
//       amount:amount,
//       currency:"INR",
//       name: 'Sumit Kumar',
//       description:"Razorpay Integration tutorial",
//       order_id:order.id,
//       callback_url: '/api/v1/paymentVerification',
//       // this prefill is for customer 
//       prefill:{
//         name:"Sumit kumar",
//         email:"sumit@gmail.com",
//         contact:"9999999999",
//       },
//       theme:{
//         color:"#f37254"
//       },
//     };

//     const rzp = new Razorpay(options);
//     rzp.open();
//   }
//   return (
//     <>
//       <div className='product_container flex justify-center items-center min-h-screen bg-gray-100'>
//         {products.map((item)=>(<div className='product_card bg-white rounded-2xl shadow-lg p-6 w-72 transform hover:scale-105 transition-transform duration-300'>
//           <img 
//            src = {item.image}
//             alt={item.title} 
//             className='product_image w-full h-48 object-cover rounded-xl mb-4' 
//           />
//           <h3 className='product-title text-lg font-semibold text-gray-800 mb-2'>{item.title}</h3>
//           <p className='product-price text-gray-600 mb-4'>
//             Price: <strong className="text-green-600">{item.price}</strong>
//           </p>
//           <button onClick={()=>checkoutHandler(item.price)} className= 'pay-button cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
            
//            Pay  {item.price}
//           </button>
//         </div>)) }
//       </div>
//     </>
//   );
// }

// export default Products;




// import React from 'react';

// function Products({ products }) {
//   console.log(products);
//   return (
//     <>
//       <div className='product_container flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-6'>
//         {products.map((item) => (
//           <div key={item.id} className='product_card bg-white rounded-2xl shadow-lg p-6 w-72 transform hover:scale-105 transition-transform duration-300'>
//             <img 
//               src={item.image}
//               alt={item.title}
//               className='product_image w-full h-48 object-cover rounded-xl mb-4' 
//             />
//             <h3 className='product-title text-lg font-semibold text-gray-800 mb-2'>{item.title}</h3>
//             <p className='product-price text-gray-600 mb-4'>
//               Price: <strong className="text-green-600">₹{item.price}</strong>
//             </p>
//             <button className='pay-button cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
//               Pay ₹{item.price}
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Products;
