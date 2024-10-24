import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import {
  Button,
  CardActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box
} from '@mui/material';
import Upi from './Upi.jsx';
import { CreditCard } from '@mui/icons-material';
import QrPage from './QrPage'; // Import your QR page component

export default function App() {
  const [tipAmount, setTipAmount] = useState(''); // Store the tip amount as a string
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default payment method is cash
  const navigate = useNavigate(); // Use navigate from react-router

  // Function to handle tip selection
  const handleTipSelection = (amount) => {
    setTipAmount(amount.toString()); // Set the selected tip amount
  };

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
    <div className="  bg-green-200 h-screen flex-col w-full flex items-center justify-center">
      <div className=' p-4 rounded-md  shadow-xl bg-gray-50 '>
        <p className='text-2xl font-semibold text-center '>
          A Small Tip to My Education!
        </p>
        <p className='text-center text-xl my-2 text-gray-600'>
          Your kindness Makes Our Day!
        </p>

        <div className="butn">
          <div className="but mb-3 gap-6 flex">
            <button className="border-2 border-orange-400 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 rounded-md focus:text-white"
              onClick={() => handleTipSelection(20)}>
              ₹20
            </button>
            <button className=" border-2 border-blue-500 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 rounded-md focus:text-white"
              onClick={() => handleTipSelection(30)}>
              ₹30
            </button>
            <button className="border-2 border-green-500 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 rounded-md focus:text-white"
              onClick={() => handleTipSelection(50)}>
              ₹50
            </button>
          </div>
          <button className="border-2 w-full border-red-600 font-bold py-2 px-4 hover:bg-blue-100 focus:bg-red-500 rounded-md focus:text-white">
            Sorry, But Next time
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                  Cash
                </Box>
              } 
            />
            <FormControlLabel 
              value="upi" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center">
                  <CreditCard sx={{ mr: 1 }} /> UPI
                </Box>
              } 
            />
          </RadioGroup>
        </FormControl>

        <CardActions>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={handleConfirm} 
          >
            Confirm
          </Button>
        </CardActions>
      </div>
    </div>
  );
}

