'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Search() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    
    <div className="container mx-auto px-4 pb-4">
      <div className="width-100% text-center bg-[#efefef]" >
       
        <p className="bg-[#efefef] text-xl text-gray-600 max-w-2xl mx-auto">
          
        </p>
      </div>
     
      <div>
      <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js"/>
        <div className='bg-white rounded-lg shadow-lg px-6 pb-4' dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom"></hospitable-direct-mps>'
        }} />
      </div>
    </div>
  );
}



