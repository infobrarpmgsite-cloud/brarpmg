import Script from 'next/script';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto w-full">
        <ContentCarousel>
          <div  className='backdrop-blur-xl  w-full md:w-[50%] mx-auto drop-shadow-xl'>
          <div className='text-center sm:-mt-10xl'>
          <h1 className="lg:text-[100px] font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BPMG 
          </h1>
          <h1 className=" lg:text-[100px] text-5xl md:text-6xl text-white -mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
           Stays
          </h1>
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
