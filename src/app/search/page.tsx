'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Search() {
 
  return (
    
    <div className="container mx-auto  px-4 py-8">
      <div className="width-100% text-center bg-[#efefef] p-6" >
        <div className="text-center">
            <h1 className="text-4xl font-extrabold font-poppins tracking-wide text-[#4F4F4F] text-stroke-black mb-2 mt-2">
            Have it say BPMG Stays
            </h1>
          </div>
        </div>
      <div>
      <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js"/>
        <div className='bg-white shadow-lg px-2 md:px-6 pb-4 overflow-auto ' dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom"></hospitable-direct-mps>'
        }} />
      </div>
    </div>
  );
}



