import { useState , useRef} from 'react';
import {  useNavigate } from 'react-router-dom';
import {
  
  CardActions,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
} from '@mui/material';
// import Upi from './Upi.jsx';
import { CreditCard } from '@mui/icons-material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import QrPage from './QrPage'; // Import your QR page component
import { PlayArrow, Pause } from '@mui/icons-material'; // Import icons
import HoverRating from './HoverRating';
import santa from './assets/santa.wav'
import dpImage from './assets/dp.jpg'; // Import the image
import Dominos from './assets/Dominos.png'; // Import the image
import QrPage from './QrPage';

export default function App() {
  const [tipAmount, setTipAmount] = useState(''); // Store the tip amount as a string
  const [paymentMethod, setPaymentMethod] = useState('upi'); // Default payment method is cash
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing
  const santaAudioRef = useRef(new Audio(santa)); // Use a ref to keep the same instance
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode
  const [orderNumber, setOrderNumber] = useState('#123'); // State for order number

  const [disp, setDisp] = useState('hidden')
  // Function to handle tip selection
  const handleTipSelection = (amount) => {
    setTipAmount(amount.toString()); // Set the selected tip amount
  };

  function playSanta() {
    santaAudioRef.current.play(); // Access the ref instance
  }

  function pauseSanta() {
    santaAudioRef.current.pause(); // Access the ref instance
  }

  function toggleSanta() {
    if (isPlaying) {
      pauseSanta();
    } else {
      playSanta();
    }
    setIsPlaying(!isPlaying);
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
setDisp('flex')      } 
    } 
  };
  

  // Function to handle order number click
  const handleOrderNumberClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  // Function to handle order number change
  const handleOrderNumberChange = (e) => {
    setOrderNumber(e.target.value); // Update order number
  };

  // Function to handle blur event (when input loses focus)
  const handleBlur = () => {
    setIsEditing(false); // Disable editing mode
  };

  return (
    <div className="  bg-blue-300 h-full flex-col w-full flex items-center justify-center">

      <div className='bg-gray-100 rounded-md  shadow-xl  '>


        <div className="top flex items-center justify-between  bg-white rounded-md w-full px-4 h-20">
          <img src={Dominos}  className=' rounded-md   h-full'/>
          {isEditing ? (
            <TextField
              value={orderNumber}
              onChange={handleOrderNumberChange}
              onBlur={handleBlur} // Disable editing on blur
              variant="outlined"
              size="small"
            />
          ) : (
            <p className=' text-xl mt-4 font-medium text-gray-500' onClick={handleOrderNumberClick}>
              Order no:{orderNumber}
            </p>
          )}
        </div>



<div className="allPg  p-4">
  

        <div className="img mb-3 flex gap-3 justify-start items-center">
          <img src={dpImage} className='h-16 w-16 rounded-full' alt="Description" />
          <p> 
            <p className=' text-gray-600 font-semibold text-xl'>Chetan More</p>
            <p className=' text-gray-400'>Good Rider & Student</p>
          </p>
        </div>


      
        <p className='text-xl mb-3 w-4/5 mx-auto font-bold text-red-500 text-center '>
        Merry Christmas & Happy New Year!
       </p>

       <button className=' bg-red-500 w-full p-2 rounded-2xl text-white font-semibold text-xl' 
         
         onClick={toggleSanta} 
       >
         {isPlaying ? <Pause /> : <PlayArrow />} {/* Toggle icon based on state */}
       Message from Santa
       </button>

       <div className=' w-4/5 text-center mx-auto'>
       
      
      <div className='Rating my-1'>

      <p className=' text-xl font-normal'>
        Rate Your Experience
      </p>
      <div className='RatingCompo flex items-center justify-center'>
<HoverRating/>
      </div>

      </div>
        <p className='text-center text-xl my-2 font-normal text-gray-600'>
Spread some festive cheer with a small tip!
       </p>
       </div>
       <QrPage tipamt={tipAmount} dis={disp}/>

        <div className="butn ">
          <div className="but mb-3 gap-6 flex transition-all  ">
            <button className="border-2 text-gray-700 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 focus:border-slate-400 rounded-md focus:text-white"
              onClick={() => handleTipSelection(30)}>
              ₹30
            </button>
            <button className=" border-2 text-gray-700 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 focus:border-slate-400 rounded-md focus:text-white"
              onClick={() => handleTipSelection(50)}>
              ₹50
            </button>
            <button className="border-2 text-gray-700 font-bold py-2 px-8 hover:bg-blue-100 focus:bg-blue-500 focus:border-slate-400 rounded-md focus:text-white"
              onClick={() => handleTipSelection(100)}>
              ₹100
            </button>
          </div>
          <button className="border-2 w-full font-medium text-gray-500 py-2 px-4 hover:bg-blue-100 focus:bg-red-500 focus:border-slate-600 rounded-md focus:text-white">
            Maybe Next Time
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500 ">
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
                  <PhoneAndroidIcon  className=' text-blue-500  ' /> 
                  <p className='  ml-1 font-semibold text-gray-500'>UPI</p>
                </Box>
              } 
            />
          </RadioGroup>
        </FormControl>

        <CardActions>
          <button className=' bg-blue-500 w-full p-2 border border-gray-500 rounded-2xl text-white font-semibold text-xl' 
         
            onClick={handleConfirm} 
          >
            Confirm
          </button>
        </CardActions>
      </div>
      <div>
  
  </div>     
      </div>
    </div>
  );
} 