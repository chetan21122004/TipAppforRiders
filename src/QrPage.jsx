// QrPage.jsx
import React from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import Upi from './Upi';
const QrPage = () => {
  const location = useLocation();
  const { amount } = location.state || { amount: 0 }; // Get the amount from the state
  const navigate = useNavigate(); // Use navigate from react-router

  return (
    <div className="flex items-center justify-center h-screen bg-red-200">
       
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <button
      onClick={()=>navigate('/')}
      className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
        <h1 className="text-2xl text-center font-semibold mb-4">Thank You for Supporting My Journey!</h1>
        {/* Placeholder for QR code */}
<Upi upiId={"morechetan9@ibl"} amount={amount}/>
      </div>
    </div>
  );
};

export default QrPage;
