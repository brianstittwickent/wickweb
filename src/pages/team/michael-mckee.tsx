import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/image';

const MichaelMcKeeProfile: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wick-900 mb-4">Michael McKee</h1>
          <h2 className="text-2xl text-wick-600 mb-8">Community Health Manager</h2>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/michael-mckee.jpg"
              alt="Michael McKee"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-wick-600">
            <p className="mb-4">
              Michael McKee is a dedicated Community Health Manager with extensive experience in developing and implementing health education programs. His innovative approach to community outreach has helped establish strong partnerships between healthcare providers and local communities.
            </p>
            <p className="mb-4">
              Throughout his career, Michael has focused on creating accessible health education initiatives that address the specific needs of diverse populations. His work has been particularly impactful in developing programs that bridge cultural and socioeconomic barriers to healthcare access.
            </p>
            <p>
              Michael holds a Bachelor's degree in Public Health and a Master's in Community Development. He is actively involved in various community health organizations and regularly speaks at conferences about innovative approaches to community health education.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MichaelMcKeeProfile;
