import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const About: NextPage = () => {
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
                src="/images/placeholder-person.jpg"
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
