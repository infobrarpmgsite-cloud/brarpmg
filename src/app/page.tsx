'use client';

import Script from 'next/script';
import Image from 'next/image';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto w-full relative overflow-x-hidden">
      {/* Carousel and Search Section */}
      <ContentCarousel>
        <div className='w-full mx-auto -mt-25 lg:-mt-25 flex flex-col items-center justify-center px-4'>
          {/* Logo */}
          <div className='flex-shrink-0 rounded-full p-6 md:p-10 bg-white/50'>
            <Image 
              src="https://infobrarpmgsite-cloud.github.io/brarpmg/Logo.PNG"
              //src="/Logo.PNG"
              alt="BPMG STAYS"
              width={400}
              height={400}
              className="h-32 sm:h-40 lg:h-80 w-auto mx-auto object-contain pointer-events-none"
              draggable={false}
              priority
            />
          </div>
          
         
        </div>
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div className="max-w-2xl mx-auto px-4 w-full" style={{ position: 'relative', zIndex: 99999 }}>
          <style jsx global>{`
            hospitable-direct-mps {
              --hospitable-font-size-base: 14px !important;
              --hospitable-font-size-lg: 16px !important;
              --hospitable-input-height: 40px !important;
              --hospitable-button-height: 40px !important;
              --hospitable-border-radius: 8px !important;
              font-size: 14px !important;
            }
            hospitable-direct-mps .hospitable-search-widget {
              max-width: 100% !important;
              padding: 16px !important;
            }
              hospitable-mps .date-picker-container{
            padding: 15px !important;
            }
            @media (max-width: 640px) {
              hospitable-direct-mps {
                --hospitable-font-size-base: 12px !important;
                --hospitable-font-size-lg: 14px !important;
                --hospitable-input-height: 36px !important;
                --hospitable-button-height: 36px !important;
              }
            }
          `}</style>
          <div style={{ position: 'relative' }} dangerouslySetInnerHTML={{
            __html: `<hospitable-direct-mps identifier="${process.env.NEXT_PUBLIC_HOSPITABLE_SEARCH_IDENTIFIER}" type="custom" results-url="/search"></hospitable-direct-mps>`
          }} />
        </div>
         {/* Slogan */}
         <div className="text-center space-y-4 w-full max-w-screen-lg mx-auto">
            {/* Decorative line top */}
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap px-2">
              <div className="w-6 md:w-12 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/80 font-medium text-[10px] sm:text-xs md:text-base tracking-widest" style={{ fontFamily: 'Manrope, sans-serif' }}>RESIDENTIAL AND VACATION HOMES</span>
              <div className="w-6 md:w-12 h-1 bg-white/60 rounded-full"></div>
            </div>
            
            {/* Main Slogan */}
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed px-4" style={{ fontFamily: 'Quintessential, sans-serif', letterSpacing: '0.5px' }}>
              A Stay That Feels Like Home
            </p>
            
            {/* Decorative line bottom */}
            <div className="flex items-center justify-center">
              <div className="w-6 md:w-12 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
      </ContentCarousel>
    </div>
  );
}
