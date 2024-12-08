import { NextPage } from 'next';
import Layout from '../../components/Layout';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  return (
    <Layout showNav={false}>
      <div className="bg-gradient-to-b from-wick-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-wick-900 mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-wick-900 mx-auto mb-8"></div>
            <p className="text-xl text-wick-600 max-w-3xl mx-auto">
              At Wick Enterprises, we believe in the power of community engagement. 
              Our services are designed to bring people together and create positive change 
              that ignites lasting health improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Community Engagement"
              description="Building stronger, healthier communities through active participation, education, and collaborative initiatives that create lasting positive change."
              link="/services/community-engagement"
            />
            <ServiceCard
              title="Health Education"
              description="Comprehensive health education programs that empower individuals and communities with knowledge and practical skills for better wellness."
              link="/services/health-education"
            />
            <ServiceCard
              title="Wellness Programs"
              description="Customized wellness programs that integrate physical activity, nutrition, and mental health support for holistic community health."
              link="/services/wellness-programs"
            />
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-wick-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-wick-600 mb-8">
              Let's work together to create positive change in your community.
            </p>
            <Link 
              href="/contact"
              className="bg-wick-900 text-white px-8 py-3 rounded-md hover:bg-wick-800 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
