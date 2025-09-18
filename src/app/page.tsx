import Script from 'next/script';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto px-4 py-8">
        <div className="text-center p-10 backdrop-blur-md bg-[#B4B4B4] w-full md:w-[70%] mx-auto">
          <hr />
          <div className='backdrop-blur-md bg-[#B4B4B4] w-full md:w-[70%] mx-auto'>
          </div>
          <h1 className="lg:text-[100px] font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BPMG 
          </h1>
          <h1 className=" lg:text-[100px] text-5xl md:text-6xl text-white -mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
           Stays
          </h1>
          <hr />
      <ContentCarousel>
      <div className="p-6">
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom" results-url="/brarpmg/search"></hospitable-direct-mps>'
        }} />
      </div>
      </ContentCarousel>
     
    </div>
    </div>

  );
}
