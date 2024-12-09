import { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import to avoid SSR issues with GSAP
const GsapTest = dynamic(() => import('../components/GsapTest'), {
  ssr: false
});

const ComponentTesting: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-wick-900 mb-8 text-center">
          Component Testing Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-wick-900 mb-6">
            GSAP Animation Test
          </h2>
          <GsapTest />
        </div>
      </div>
    </div>
  );
};

export default ComponentTesting;
