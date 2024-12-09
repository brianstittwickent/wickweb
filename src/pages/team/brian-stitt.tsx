import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/image';

const BrianStittProfile: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wick-900 mb-4">Brian Stitt</h1>
          <h2 className="text-2xl text-wick-600 mb-8">Technology Innovation Lead</h2>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/brian-stitt.jpg"
              alt="Brian Stitt"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-wick-600">
            <p className="mb-4">
              Brian Stitt is a technology innovator and digital health expert who leads Wick Enterprises' technological initiatives. With a strong background in software development and healthcare technology, he specializes in creating digital solutions that enhance community health services and improve accessibility.
            </p>
            <p className="mb-4">
              Throughout his career, Brian has focused on bridging the gap between healthcare needs and technological solutions. His expertise includes developing telehealth platforms, health monitoring systems, and data analytics tools that help healthcare providers better serve their communities.
            </p>
            <p>
              Brian holds a degree in Computer Science and has extensive experience in healthcare IT systems. He is passionate about using technology to create more efficient, accessible, and equitable healthcare solutions. His work has been recognized for its innovative approach to solving complex healthcare challenges through digital transformation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrianStittProfile;
