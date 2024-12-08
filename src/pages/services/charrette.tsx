import Link from 'next/link';

export default function Charrette() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-health-50 via-white to-flame-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Charrette Service</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-flame-500 to-health-500 mx-auto mb-8"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-flame-700 mb-6">What is a Charrette?</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              A charrette is an intensive, collaborative planning session where community members, 
              designers, and stakeholders work together to create a shared vision for development 
              or improvement in their community's health and wellness initiatives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-flame-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-flame-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-flame-500 mr-2">✦</span>
                    Encourages community participation and ownership
                  </li>
                  <li className="flex items-center">
                    <span className="text-flame-500 mr-2">✦</span>
                    Generates creative solutions through collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="text-flame-500 mr-2">✦</span>
                    Provides immediate feedback to designers and planners
                  </li>
                  <li className="flex items-center">
                    <span className="text-flame-500 mr-2">✦</span>
                    Accelerates the decision-making process
                  </li>
                  <li className="flex items-center">
                    <span className="text-flame-500 mr-2">✦</span>
                    Builds consensus among diverse stakeholders
                  </li>
                </ul>
              </div>

              <div className="bg-health-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-health-800 mb-4">Our Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-health-200 rounded-full w-6 h-6 flex items-center justify-center text-health-800 mr-3">1</span>
                    Pre-charrette planning and stakeholder identification
                  </li>
                  <li className="flex items-center">
                    <span className="bg-health-200 rounded-full w-6 h-6 flex items-center justify-center text-health-800 mr-3">2</span>
                    Community outreach and engagement
                  </li>
                  <li className="flex items-center">
                    <span className="bg-health-200 rounded-full w-6 h-6 flex items-center justify-center text-health-800 mr-3">3</span>
                    Intensive design and planning workshops
                  </li>
                  <li className="flex items-center">
                    <span className="bg-health-200 rounded-full w-6 h-6 flex items-center justify-center text-health-800 mr-3">4</span>
                    Real-time feedback and adjustments
                  </li>
                  <li className="flex items-center">
                    <span className="bg-health-200 rounded-full w-6 h-6 flex items-center justify-center text-health-800 mr-3">5</span>
                    Implementation strategy development
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-flame-500 to-health-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Community's Journey?</h3>
            <p className="mb-8 text-lg">
              We're here to help facilitate meaningful community engagement and create positive change 
              through our charrette services.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-flame-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us to Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
