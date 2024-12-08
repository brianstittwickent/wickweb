import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const CommunityEngagementPage: NextPage = () => {
  const programs = [
    {
      title: "Health Education Workshops",
      description: "Interactive sessions designed to educate and empower community members about various health topics.",
      features: ["Expert-led sessions", "Hands-on learning", "Community Q&A", "Take-home resources"]
    },
    {
      title: "Wellness Challenges",
      description: "Community-wide initiatives that encourage healthy habits and foster friendly competition.",
      features: ["Monthly themes", "Progress tracking", "Group activities", "Achievement rewards"]
    },
    {
      title: "Community Health Fairs",
      description: "Regular events bringing together health providers, educators, and community members.",
      features: ["Health screenings", "Local partnerships", "Family activities", "Resource sharing"]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-wick-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/wick-logo.svg"
                alt="Community Engagement"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold text-wick-900 mb-6">Community Engagement</h1>
            <p className="text-xl text-wick-600 max-w-3xl mx-auto">
              Building stronger, healthier communities through active participation, education, and collaborative initiatives.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-wick-900 mb-6">Our Approach</h2>
              <p className="text-wick-600 mb-6">
                At Wick Enterprises, we believe that true community health starts with active engagement. 
                Our programs are designed to bring people together, foster meaningful connections, and create 
                lasting positive change in community health outcomes.
              </p>
              <p className="text-wick-600 mb-6">
                Through our diverse range of programs and initiatives, we work to break down barriers to 
                health education and create inclusive spaces where everyone can learn, grow, and thrive together.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-wick-900">
                <h3 className="text-xl font-bold text-wick-900 mb-4">Why Community Engagement Matters</h3>
                <ul className="space-y-3 text-wick-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wick-900 rounded-full mr-3"></span>
                    Builds stronger social connections
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wick-900 rounded-full mr-3"></span>
                    Improves health outcomes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wick-900 rounded-full mr-3"></span>
                    Creates sustainable change
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wick-900 rounded-full mr-3"></span>
                    Empowers community members
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-wick-900 mb-3">{program.title}</h3>
                  <p className="text-wick-600 mb-4">{program.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-sm text-wick-600">
                        <span className="w-1.5 h-1.5 bg-wick-900 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-wick-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to make a difference in your community? Join our next program or learn more about 
              how you can contribute to community health initiatives.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/contact"
                className="bg-white text-wick-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityEngagementPage;
