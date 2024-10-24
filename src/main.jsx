import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter instead
import QrPage from './QrPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Use BrowserRouter here */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
