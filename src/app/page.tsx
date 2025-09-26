import Script from 'next/script';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className="mx-auto w-full">
<ContentCarousel>
          <div  className='w-full md:w-[50%] mx-auto'>
          <div className='text-center sm:-mt-10xl text-shadow-lg'>
          <h1 className="lg:text-[100px]  text-5xl md:text-6xl font-extrabold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BPMG 
          </h1>
          <h1 className=" lg:text-[100px]  text-5xl md:text-6xl text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
