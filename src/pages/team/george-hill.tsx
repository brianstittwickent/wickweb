import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/image';

const GeorgeHillProfile: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wick-900 mb-4">George Hill</h1>
          <h2 className="text-2xl text-wick-600 mb-8">Director of Operations</h2>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/george-hill.jpg"
              alt="George Hill"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-wick-600">
            <p className="mb-4">
              George Hill brings over 15 years of healthcare management experience to his role as Director of Operations at Wick Enterprises. His expertise in operational excellence and strategic planning has been instrumental in driving the organization's growth and impact in community health initiatives.
            </p>
            <p className="mb-4">
              Prior to joining Wick Enterprises, George served as Operations Manager at several leading healthcare institutions, where he successfully implemented efficiency improvements and quality management systems. His approach to operations combines data-driven decision-making with a deep understanding of community health needs.
            </p>
            <p>
              George holds a Master's degree in Healthcare Administration and is certified in Lean Six Sigma. He is passionate about creating sustainable healthcare solutions that serve diverse communities and improve access to quality care.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeorgeHillProfile;
