import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-wick-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/images/wick-logo.svg"
                alt="Wick Enterprises Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-wick-900">Fueling</span> the{' '}
              <span className="text-red-600">Flames</span> for{' '}
              <span className="text-wick-800">Health</span>
            </h1>
            <p className="text-xl text-wick-600 mb-12 max-w-3xl mx-auto">
              At Wick Enterprises, we ignite community wellness through engagement, 
              innovation, and collaboration. Together, we can build healthier, 
              stronger communities.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/services"
                className="bg-wick-900 text-white px-8 py-3 rounded-md hover:bg-wick-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-white text-wick-900 px-8 py-3 rounded-md border-2 border-wick-900 hover:bg-wick-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-lg bg-wick-50 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/images/wick-logo.svg"
                  alt="Community Icon"
                  fill
                  className="object-contain opacity-75"
                />
              </div>
              <h3 className="text-xl font-semibold text-wick-900 mb-4">Community Engagement</h3>
              <p className="text-wick-600">
                Building stronger communities through active participation and collaboration.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-wick-900 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/images/wick-logo.svg"
                  alt="Health Icon"
                  fill
                  className="object-contain brightness-0 invert opacity-75"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Health Innovation</h3>
              <p className="text-wick-200">
                Implementing creative solutions for community health challenges.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-wick-50 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/images/wick-logo.svg"
                  alt="Impact Icon"
                  fill
                  className="object-contain opacity-75"
                />
              </div>
              <h3 className="text-xl font-semibold text-wick-900 mb-4">Lasting Impact</h3>
              <p className="text-wick-600">
                Creating sustainable change for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-wick-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Ignite Change in Your Community?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-wick-900 px-8 py-3 rounded-md hover:bg-wick-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>
    </div>
  );
}
