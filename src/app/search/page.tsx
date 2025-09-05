'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Search() {
    useEffect(() => {
          document.body.classList.remove("search-bar-container-bg");
      }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Search Results
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find your perfect property with our comprehensive search results.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Property Search Results</h2>
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom"></hospitable-direct-mps>'
        }} />
      </div>
    </div>
  );
}



