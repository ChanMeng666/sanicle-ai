'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const [redirectMessage, setRedirectMessage] = useState('Preparing to redirect...');
  const [countdown, setCountdown] = useState(3);
  
  useEffect(() => {
    const to = searchParams?.get('to') || '/dashboard';
    console.log('Redirect page loaded, destination:', to);
    
    // Display countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Direct URL setting, simplest way to ensure redirect
          window.location.href = to;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [searchParams]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Page Redirect</h1>
        <p className="mb-6">{redirectMessage}</p>
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl font-bold">
            {countdown}
          </div>
        </div>
        <div className="animate-pulse bg-gray-200 h-2 w-full rounded mb-2"></div>
        <div className="animate-pulse bg-gray-200 h-2 w-2/3 mx-auto rounded"></div>
      </div>
    </div>
  );
} 