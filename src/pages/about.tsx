import { NextPage } from 'next';
import Layout from '../components/Layout';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  const teamMembers = [
    {
      name: "George Hill",
      title: "Director of Operations",
      summary: "Leading operational excellence with over 15 years of healthcare management experience.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Michael McKee",
      title: "Community Health Manager",
      summary: "Specializing in community outreach and health education program development.",
      image: "/images/michael-mckee.jpg"
    },
    {
      name: "Dr. Malaika McKee-Culpepper",
      title: "Research Director",
      summary: "Driving evidence-based initiatives with expertise in public health research.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Brian Stitt",
      title: "Technology Innovation Lead",
      summary: "Bridging healthcare and technology to create impactful digital solutions.",
      image: "/images/placeholder-person.jpg"
    }
  ];

  const boardMembers = [
    {
      name: "Dr. James Thompson",
      title: "Board Chair",
      summary: "Former Dean of Public Health with 25+ years experience in community health initiatives.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Patricia Martinez",
      title: "Vice Chair",
      summary: "Healthcare policy expert and advocate for equitable health access.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Robert Chen, PhD",
      title: "Secretary",
      summary: "Leading researcher in public health interventions and community engagement.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Lisa Washington",
      title: "Treasurer",
      summary: "Financial executive with expertise in healthcare organization management.",
      image: "/images/placeholder-person.jpg"
    }
  ];

  const advisoryBoard = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Healthcare Innovation Advisor",
      summary: "Pioneer in digital health transformation and telemedicine implementation.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "David Kumar",
      title: "Community Engagement Advisor",
      summary: "Expert in building sustainable community health programs and partnerships.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "Dr. Maria Gonzalez",
      title: "Public Health Policy Advisor",
      summary: "Leading authority on health equity and policy development.",
      image: "/images/placeholder-person.jpg"
    },
    {
      name: "William Foster",
      title: "Strategic Development Advisor",
      summary: "Veteran healthcare executive specializing in organizational growth and sustainability.",
      image: "/images/placeholder-person.jpg"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wick-900 mb-4">About Wick Enterprises</h1>
          <div className="w-24 h-1 bg-wick-900 mx-auto"></div>
        </div>

        {/* Executive Director Card */}
        <div className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[500px]">
              <Image
                src="/images/thea-monet.jpg"
                alt="Thea Monet"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-wick-900 mb-2">Thea Monet</h2>
              <h3 className="text-xl text-wick-600 mb-6">Executive Director</h3>
              <div className="space-y-4 text-wick-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/wick-logo.svg"
              alt="Wick Enterprises Logo"
              fill
              className="object-contain p-8"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-wick-900 mb-6">Fueling the Flames For Health</h2>
            <p className="text-wick-600 mb-6">
              At Wick Enterprises, we believe in igniting the spark of health and wellness in every community. 
              Our mission is to empower individuals and organizations with the tools, knowledge, and support 
              they need to build stronger, healthier communities.
            </p>
            <p className="text-wick-600 mb-6">
              Founded with a vision to transform community health, we've grown into a trusted partner for 
              health initiatives, wellness programs, and community engagement projects that make a real difference 
              in people's lives.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Our Mission",
              content: "To ignite and sustain health initiatives that transform communities."
            },
            {
              title: "Our Vision",
              content: "A world where every community has access to the resources they need for optimal health."
            },
            {
              title: "Our Values",
              content: "Innovation, Community, Integrity, and Sustainable Impact."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-wick-900">
              <h3 className="text-xl font-bold text-wick-900 mb-4">{item.title}</h3>
              <p className="text-wick-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-wick-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
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
        </div>

        {/* Board of Directors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-wick-900 text-center mb-12">Board of Directors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
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
        </div>

        {/* Board of Advisors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-wick-900 text-center mb-12">Board of Advisors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
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
        </div>

        <div className="bg-gradient-to-r from-wick-900 to-wick-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Whether you're an individual looking to improve your community's health or an organization 
            seeking partnership opportunities, we're here to help you make a lasting impact.
          </p>
          <button className="bg-white text-wick-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
