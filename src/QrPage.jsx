// QrPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Upi from "./Upi";
const QrPage = ({ tipamt, dis }) => {
  const location = useLocation();
  const { amount } = location.state || { amount: 0 }; // Get the amount from the state
  const navigate = useNavigate(); // Use navigate from react-router

  return (
    <div className={`flex items-center  justify-center ${dis} `}>
      <div className=" ">
        {/* Placeholder for QR code */}
        <Upi upiId={"morechetan9@ibl"} amount={tipamt} />
        <p className="text-xl text-center w-[300px] font-semibold mb-4">
          Thank You for Supporting My Journey!
        </p>
      </div>
    </div>
  );
};

export default QrPage;
