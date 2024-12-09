import { NextPage } from 'next';
import Image from 'next/image';

const MalaikaMcKeeCulpepperProfile: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-wick-900 mb-4">Dr. Malaika McKee-Culpepper</h1>
        <h2 className="text-2xl text-wick-600 mb-8">Research Director</h2>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/placeholder-person.jpg"
            alt="Dr. Malaika McKee-Culpepper"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="prose prose-lg max-w-none text-wick-600">
          <p className="mb-4">
            Dr. Malaika McKee-Culpepper is a distinguished researcher and public health expert who leads Wick Enterprises' research initiatives. With a Ph.D. in Public Health and over a decade of experience in evidence-based research, she has been instrumental in shaping the organization's approach to community health interventions.
          </p>
          <p className="mb-4">
            Her research focuses on health disparities, social determinants of health, and innovative approaches to improving healthcare access in underserved communities. Dr. McKee-Culpepper has published numerous peer-reviewed articles and has been awarded several prestigious grants for her work in public health research.
          </p>
          <p>
            Before joining Wick Enterprises, she served as an Associate Professor of Public Health at a leading university and conducted groundbreaking research on community-based participatory research methods. She continues to mentor emerging researchers and frequently collaborates with academic institutions on various public health initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MalaikaMcKeeCulpepperProfile;
