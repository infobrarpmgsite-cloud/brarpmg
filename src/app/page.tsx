import Script from 'next/script';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-[#efefef] shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Have it say BPMG Stays
          </h1>
        </div>
        <Script src="https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js" />
        <div dangerouslySetInnerHTML={{
          __html: '<hospitable-direct-mps identifier="47ea57e8-c278-4bae-bda6-6197f2e06932" type="custom" results-url="/brarpmg/search"></hospitable-direct-mps>'
        }} />
      </div>
    </div>
  );
}
