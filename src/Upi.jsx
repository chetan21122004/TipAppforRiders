import { QRCodeSVG } from 'qrcode.react';

const Upi = ({ upiId, amount }) => {
  const upiLink = `upi://pay?pa=${upiId}&am=${amount}`;

  return (
    <div className="text-center pb-1 w-full gap-5 flex items-center justify-center flex-col   rounded ">
      <h2 className="text-xl font-bold ">Scan to Pay ₹{amount}</h2>
      <QRCodeSVG className=' h-52 w-52  bg-gray-100' value={upiLink} />
    </div>
  );
};

export default Upi;
