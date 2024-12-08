import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Healthier Communities Through Collaboration',
    excerpt: 'Discover how community partnerships are transforming local health initiatives and creating lasting change.',
    date: 'December 8, 2024',
    readTime: '5 min read',
    imageUrl: '/images/wick-logo.svg'
  },
  {
    id: '2',
    title: 'The Future of Community Health Programs',
    excerpt: 'Exploring innovative approaches to community health and wellness in the modern era.',
    date: 'December 7, 2024',
    readTime: '4 min read',
    imageUrl: '/images/wick-logo.svg'
  },
  {
    id: '3',
    title: 'Sustainable Health Initiatives That Work',
    excerpt: 'Learn about successful health programs that have created lasting impact in communities.',
    date: 'December 6, 2024',
    readTime: '6 min read',
    imageUrl: '/images/wick-logo.svg'
  }
];

const BlogPage: NextPage = () => {
  return (
    <Layout showNav={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-wick-900 mb-4">Our Blog</h1>
          <p className="text-wick-600 max-w-2xl mx-auto">
            Insights, updates, and stories about community health initiatives and the impact we're making together.
          </p>
          <div className="w-24 h-1 bg-wick-900 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-wick-600 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-wick-900 mb-2">{post.title}</h2>
                  <p className="text-wick-600">{post.excerpt}</p>
                  <div className="mt-4 text-wick-900 font-semibold hover:text-wick-800">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-wick-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-wick-800 transition-colors duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
