import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
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
            <div className="relative h-[500px] rounded-lg overflow-hidden">
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
                  Thea Monet brings over two decades of experience in healthcare management and community development to her role as Executive Director of Wick Enterprises. Her visionary leadership has been instrumental in transforming how healthcare services are delivered to underserved communities.
                </p>
                <p>
                  Under her guidance, Wick Enterprises has pioneered innovative approaches to community health, combining traditional healthcare services with cutting-edge technology and community engagement strategies. Her focus on sustainable, accessible healthcare solutions has led to the development of numerous successful programs that continue to make a positive impact.
                </p>
                <p>
                  Thea holds a Master's in Public Health and an MBA, bringing both healthcare expertise and business acumen to her role. She is frequently invited to speak at healthcare conferences and has been recognized with numerous awards for her contributions to community health initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-wick-900 mb-8 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h3 className="text-xl font-semibold text-wick-900 mb-2">Michael McKee</h3>
            <p className="text-wick-600 mb-4">Chief Executive Officer</p>
            <Link href="/team/michael-mckee" className="inline-block bg-wick-600 text-white px-4 py-2 rounded hover:bg-wick-700 transition-colors">
              Learn More
            </Link>
          </div>

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
            <h3 className="text-xl font-semibold text-wick-900 mb-2">Dr. Malaika McKee-Culpepper</h3>
            <p className="text-wick-600 mb-4">Research Director</p>
            <Link href="/team/malaika-mckee-culpepper" className="inline-block bg-wick-600 text-white px-4 py-2 rounded hover:bg-wick-700 transition-colors">
              Learn More
            </Link>
          </div>

          {/* George Hill */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/george-hill.jpg"
                alt="George Hill"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-wick-900 mb-2">George Hill</h3>
            <p className="text-wick-600 mb-4">Director of Operations</p>
            <Link href="/team/george-hill" className="inline-block bg-wick-600 text-white px-4 py-2 rounded hover:bg-wick-700 transition-colors">
              Learn More
            </Link>
          </div>

          {/* Brian Stitt */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/brian-stitt.jpg"
                alt="Brian Stitt"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-wick-900 mb-2">Brian Stitt</h3>
            <p className="text-wick-600 mb-4">Technology Innovation Lead</p>
            <Link href="/team/brian-stitt" className="inline-block bg-wick-600 text-white px-4 py-2 rounded hover:bg-wick-700 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-wick-900 mb-8 text-center">Board of Directors</h2>
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
