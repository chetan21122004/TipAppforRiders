import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {
  
  CardActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box
} from '@mui/material';
// import Upi from './Upi.jsx';
import { CreditCard } from '@mui/icons-material';
// import QrPage from './QrPage'; // Import your QR page component

import santa from './assets/santa.wav'

export default function App() {
  const [tipAmount, setTipAmount] = useState(''); // Store the tip amount as a string
  const [paymentMethod, setPaymentMethod] = useState('upi'); // Default payment method is cash
  const navigate = useNavigate(); // Use navigate from react-router

  // Function to handle tip selection
  const handleTipSelection = (amount) => {
    setTipAmount(amount.toString()); // Set the selected tip amount
  };

  function playSanta() {
    new Audio(santa).play();
  }
  // Function to handle custom tip input
  const handleCustomTip = (e) => {
    const value = e.target.value; // Get the input value
    if (value === '' || /^\d+$/.test(value)) {
      setTipAmount(value); // Update the tip amount
    }
  };

  // Function to confirm the tip
  const handleConfirm = () => {
    console.log('Confirm clicked.'); // Check if this is logged
    console.log(`Tip Amount: ${tipAmount}, Payment Method: ${paymentMethod}`); // Check the values
  
    if (tipAmount) {
      if (paymentMethod === 'upi') {
        // Navigate to QR page with the tip amount
        console.log('Navigating to QR page.'); // Check if this is logged
        navigate('/qr', { state: { amount: tipAmount } });
      } 
    } 
  };
  

  return (
    <div className="  bg-red-100 h-screen flex-col w-full flex items-center justify-center">
      <div className=' p-4 bg-gray-50 rounded-md  shadow-xl '>
       <button className=' bg-red-500 w-full p-2 rounded-2xl text-white font-semibold text-xl' 
         
         onClick={playSanta} 
       >
         Message from Santa
       </button>
       <div className=' w-4/5 text-center mx-auto'>
       
       <p className='text-xl font-bold text-red-600 text-center '>
        Merry Christmas & Happy New Year!
       </p>
        <p className='text-center text-xl my-2 font-normal text-gray-600'>
Spread some festive cheer with a small tip!
       </p>
       </div>

        <div className="butn">
          <div className="but mb-3 gap-6 flex">
            <button className="border-2  font-bold py-2 px-8 hover:bg-red-100 focus:bg-red-500 focus:border-slate-600 rounded-md focus:text-white"
              onClick={() => handleTipSelection(30)}>
              ₹30
            </button>
            <button className=" border-2  font-bold py-2 px-8 hover:bg-red-100 focus:bg-red-500 focus:border-slate-600 rounded-md focus:text-white"
              onClick={() => handleTipSelection(50)}>
              ₹50
            </button>
            <button className="border-2  font-bold py-2 px-8 hover:bg-red-100 focus:bg-red-500 focus:border-slate-600 rounded-md focus:text-white"
              onClick={() => handleTipSelection(100)}>
              ₹100
            </button>
          </div>
          <button className="border-2 w-full font-bold py-2 px-4 hover:bg-red-100 focus:bg-red-500 focus:border-slate-600 rounded-md focus:text-white">
            NA , But Next time
          </button>
        </div>

        <div className="flex my-5">
          <TextField
            label="Custom Amount"
            variant="outlined"
            fullWidth
            value={tipAmount}
            onChange={handleCustomTip}
          />
        </div>

        <FormControl>
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)} // Update payment method on change
          >
            <FormControlLabel 
              value="cash" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  <p className=' ml-1  font-semibold text-gray-500'>Cash</p>

                </Box>
              } 
            />
            <FormControlLabel 
              value="upi" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center" >
                  <CreditCard  className=' text-red-500 ' /> 
                  <p className='  ml-1 font-semibold text-gray-500'>UPI</p>
                </Box>
              } 
            />
          </RadioGroup>
        </FormControl>

        <CardActions>
          <button className=' bg-red-500 w-full p-2 rounded-2xl text-white font-semibold text-xl' 
         
            onClick={handleConfirm} 
          >
            Confirm
          </button>
        </CardActions>
      </div>
      <div>
       
      </div>
    </div>
  );
}

