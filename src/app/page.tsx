import Script from 'next/script';
import ContentCarousel from '@/components/ContentCarousel';

export default function Home() {
  return (
    <div className=" mx-auto px-4 py-8">
      <ContentCarousel>
      <div className="p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white/50 tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Have it say BPMG Stays
          </h1>
        </div>
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom" results-url="/brarpmg/search"></hospitable-direct-mps>'
        }} />
      </div>
      </ContentCarousel>
    </div>
  );
}
