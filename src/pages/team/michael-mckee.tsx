import { NextPage } from 'next';
import Image from 'next/image';

const MichaelMcKeeProfile: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-wick-900 mb-4">Michael McKee</h1>
        <h2 className="text-2xl text-wick-600 mb-8">Chief Executive Officer</h2>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/michael-mckee.jpg"
            alt="Michael McKee"
            width={300}
            height={300}
            className="rounded-full object-cover"
          />
        </div>
        <div className="prose prose-lg max-w-none text-wick-600">
          <p className="mb-4">
            Michael McKee is the visionary CEO of Wick Enterprises, bringing over two decades of experience in healthcare management and community development. Under his leadership, Wick Enterprises has grown from a local initiative to a comprehensive healthcare solutions provider focused on addressing community health needs.
          </p>
          <p className="mb-4">
            With a strong background in both healthcare administration and community engagement, Michael has successfully led numerous initiatives that have significantly improved access to quality healthcare in underserved communities. His innovative approach to healthcare delivery combines traditional medical services with modern technology and community-based programs.
          </p>
          <p>
            Michael holds an MBA in Healthcare Management and has received numerous awards for his contributions to community health initiatives. His commitment to creating sustainable, accessible healthcare solutions continues to drive Wick Enterprises' mission and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MichaelMcKeeProfile;
