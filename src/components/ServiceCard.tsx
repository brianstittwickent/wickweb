import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-wick-900 hover:scale-105">
      <div className="relative w-20 h-20 mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/wick-logo-animate.svg"
          alt="Wick Enterprises Flame"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-2xl font-bold text-wick-900 mb-4">{title}</h3>
      <p className="text-wick-600 mb-6 min-h-[100px]">{description}</p>
      <Link 
        href={link}
        className="inline-block bg-wick-900 text-white px-6 py-2 rounded-md hover:bg-wick-800 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
