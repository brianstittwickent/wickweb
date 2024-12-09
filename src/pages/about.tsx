import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
  const boardMembers = [
    {
      name: "Dr. James Thompson",
      title: "Board Chair",
      summary: "Former Dean of Public Health with 25+ years experience in community health initiatives.",
      image: "/images/wick-logo.svg"
    },
    {
      name: "Patricia Martinez",
      title: "Vice Chair",
      summary: "Healthcare policy expert and advocate for equitable health access.",
      image: "/images/wick-logo.svg"
    },
    {
      name: "Robert Chen, PhD",
      title: "Secretary",
      summary: "Leading researcher in public health interventions and community engagement.",
      image: "/images/wick-logo.svg"
    },
    {
      name: "Lisa Washington",
      title: "Treasurer",
      summary: "Financial executive with expertise in healthcare organization management.",
      image: "/images/wick-logo.svg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mission Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-wick-900 mb-8 text-center">Our Mission</h1>
        <p className="text-xl text-wick-600 text-center max-w-3xl mx-auto">
          At Wick Enterprises, we are dedicated to revolutionizing community health through innovative solutions and technology.
          Our mission is to create accessible, sustainable healthcare services that empower communities and improve lives.
        </p>
      </section>

      {/* Executive Director Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="flex items-center justify-center p-8">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="/images/thea-monet.jpg"
                  alt="Thea Monet"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Thea Monet</h2>
              <h3 className="text-xl text-gray-600 mb-6">Executive Director</h3>
              <p className="text-gray-700 mb-4">
                Thea Monet brings over two decades of experience in public health and community development. 
                As Executive Director of Wick Enterprises, she leads our mission to transform healthcare 
                accessibility in underserved communities.
              </p>
              <p className="text-gray-700 mb-4">
                With a Master's in Public Health from Johns Hopkins University and extensive field experience 
                in both urban and rural healthcare settings, Thea has developed innovative programs that have 
                significantly improved health outcomes in diverse communities across the country.
              </p>
              <p className="text-gray-700">
                Her leadership has been instrumental in establishing partnerships with major healthcare 
                providers, community organizations, and government agencies, creating sustainable solutions 
                for healthcare delivery and community wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dr. Malaika McKee-Culpepper */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/malaika-mckee-culpepper.jpg"
                alt="Dr. Malaika McKee-Culpepper"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Dr. Malaika McKee-Culpepper</h3>
            <p className="text-gray-600 mb-2">Chief Medical Officer</p>
            <p className="text-gray-700 px-4">
              Dr. McKee-Culpepper is a distinguished physician with over 15 years of experience in community health. 
              She oversees our medical programs and ensures the highest standards of healthcare delivery. Her expertise 
              in preventive medicine and public health has been crucial in developing our innovative healthcare solutions.
            </p>
          </div>

          {/* Michael McKee */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/michael-mckee.jpg"
                alt="Michael McKee"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Michael McKee</h3>
            <p className="text-gray-600 mb-2">Chief Operations Officer</p>
            <p className="text-gray-700 px-4">
              Michael brings extensive operational expertise from his 20+ years in healthcare administration. 
              He leads our operational strategies, ensuring efficient resource allocation and seamless program 
              implementation. His focus on operational excellence has been key to scaling our impact across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-wick-900 mb-8 text-center">Board of Directors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full object-contain p-4 bg-gray-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-wick-900 mb-2">{member.name}</h3>
                <h4 className="text-wick-600 font-medium mb-3">{member.title}</h4>
                <p className="text-wick-600 text-sm">{member.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section>
        <h2 className="text-3xl font-bold text-wick-900 mb-8 text-center">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-wick-900 mb-4">Community First</h3>
            <p className="text-wick-600">
              We believe in putting communities at the center of healthcare solutions. By understanding local needs and challenges,
              we develop targeted programs that make a real difference in people's lives.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-wick-900 mb-4">Innovation & Technology</h3>
            <p className="text-wick-600">
              Through cutting-edge technology and innovative approaches, we're breaking down barriers to healthcare access
              and creating more efficient, effective ways to deliver health services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
