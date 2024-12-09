import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Use dynamic import to avoid SSR issues with GSAP
const WickFireAnimation = dynamic(() => import('../components/WickFireAnimation'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-wick-900 to-wick-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fueling Community Health Innovation
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                We're revolutionizing healthcare access through innovative technology and community-driven solutions.
              </p>
              <div className="space-x-4">
                <Link href="/contact" className="inline-block bg-white text-wick-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started
                </Link>
                <Link href="/about" className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-wick-900 transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="transform scale-150">
                <WickFireAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

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
