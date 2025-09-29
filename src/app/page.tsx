import Script from 'next/script';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto w-full">
      <ContentCarousel>
        <div className='w-full md:w-[50%] mx-auto -mt-25 lg:-mt-45'>
          <div className="flex items-center space-x-2">
            <div className='flex-shrink-0 rounded-full p-5 lg:p-10 bg-white/50'>
              <img 
                src="./logo.png"
                alt="BPMG STAYS"
                width={400}
                height={400}
                className="h-40 lg:h-80 w-auto mx-auto object-contain "
              />
            </div>
          </div>
        </div>
          <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom" results-url="/brarpmg/search"></hospitable-direct-mps>'
        }} />
      </ContentCarousel>
    </div>
  );
}
