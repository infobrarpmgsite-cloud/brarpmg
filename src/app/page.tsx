'use client';

import Script from 'next/script';
import Image from 'next/image';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto w-full relative">
      {/* Carousel and Search Section */}
      <ContentCarousel>
        <div className='w-full mx-auto -mt-25 lg:-mt-25 flex flex-col items-center justify-center'>
          {/* Logo */}
          <div className='flex-shrink-0 rounded-full p-10 bg-white/50'>
            <Image 
              src="https://infobrarpmgsite-cloud.github.io/brarpmg/Logo.PNG"
              //src="/Logo.PNG"
              alt="BPMG STAYS"
              width={400}
              height={400}
              className="h-40 lg:h-80 w-auto mx-auto object-contain pointer-events-none"
              draggable={false}
              priority
            />
          </div>
          
          {/* Slogan */}
          <div className="text-center mt-8 md:mt-12 space-y-4 w-full px-4">
            {/* Decorative line top */}
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <div className="w-8 md:w-12 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/80 text-xs md:text-base tracking-widest whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif' }}>HOME AWAY FROM HOME</span>
              <div className="w-8 md:w-12 h-1 bg-white/60 rounded-full"></div>
            </div>
            
            {/* Main Slogan */}
            <p className="text-white text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
              A Stay That Feels<br />Like Home
            </p>
            
            {/* Decorative line bottom */}
            <div className="flex items-center justify-center">
              <div className="w-8 md:w-12 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div style={{ position: 'relative', zIndex: 99999, width: '100%' }}>
          <div style={{ position: 'relative' }} dangerouslySetInnerHTML={{
            __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom" results-url="/brarpmg/search"></hospitable-direct-mps>'
          }} />
        </div>
      </ContentCarousel>
    </div>
  );
}
