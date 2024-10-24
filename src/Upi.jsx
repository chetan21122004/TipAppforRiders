import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Upi = ({ upiId, amount }) => {
  const upiLink = `upi://pay?pa=${upiId}&am=${amount}`;

  return (
    <div className="text-center p-1 w-full gap-5 flex items-center justify-center flex-col   rounded ">
      <h2 className="text-xl font-bold mb-2">Scan to Pay ₹{amount}</h2>
      <QRCodeSVG className=' h-52 w-52  shadow-slate-500 shadow-lg' value={upiLink} />
    </div>
  );
};

export default Upi;
