// import React from 'react'
// import { useLocation } from 'react-router-dom'

// function PaymentSuccess() {
//     const query = new URLSearchParams(useLocation().search);
//     const reference = query.get("reference");
//   return (
//     <>
//     <div className='Payment-success-container'>
//         <div className='Payment-success-card'>
//             <h1 className='Payment-success-title'>Payment succesfull</h1>
//             <p className='Payment-success-message'>
//                 Thank you for your payment.Your transaction was succesfull!
//             </p>
//             {reference &&(
//                <p className='Payment-success-reference'>
//                 <strong>Reference ID:</strong>{reference}
//                </p>
//             )}

//         </div>

//     </div>
//     </>
//   )
// }

// export default PaymentSuccess




import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentSuccess() {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Payment Successful
        </h1>

        <p className="text-gray-700 text-center mb-6">
          Thank you for your payment. Your transaction was successful!
        </p>

        {reference && (
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Reference ID:</span><br />
              {reference}
            </p>
          </div>
        )}

        
      </div>
    </div>
  );
}

export default PaymentSuccess;


