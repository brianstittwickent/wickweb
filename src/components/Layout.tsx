import Link from 'next/link';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, showNav = true }) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border-color)' }}>
        {showNav && (
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/wick-logo.svg"
                  alt="Wick Enterprises Logo"
                  fill
                  className={`object-contain ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span style={{ color: 'var(--wick-900)' }} className="text-xl font-bold tracking-tight">WICK</span>
                <span style={{ color: 'var(--wick-600)' }} className="text-sm tracking-wider">ENTERPRISES</span>
              </div>
            </Link>
            <div className="flex space-x-8">
              <Link href="/about" style={{ color: 'var(--wick-600)' }} className="hover:text-wick-900 transition-colors duration-200">
                About
              </Link>
              <Link href="/blog" style={{ color: 'var(--wick-600)' }} className="hover:text-wick-900 transition-colors duration-200">
                Blog
              </Link>
              <Link href="/services" style={{ color: 'var(--wick-600)' }} className="hover:text-wick-900 transition-colors duration-200">
                Services
              </Link>
              <Link href="/contact" style={{ color: 'var(--wick-600)' }} className="hover:text-wick-900 transition-colors duration-200">
                Contact
              </Link>
              <Link href="/component-testing" style={{ color: 'var(--wick-600)' }} className="hover:text-wick-900 transition-colors duration-200">
                X
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/wick-logo.svg"
                    alt="Wick Enterprises Logo"
                    fill
                    className={`object-contain ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span style={{ color: 'var(--text-primary)' }} className="text-lg font-bold tracking-tight">WICK</span>
                  <span style={{ color: 'var(--text-secondary)' }} className="text-xs tracking-wider">ENTERPRISES</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Fueling the Flames of Health through community engagement and innovative solutions.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" style={{ color: 'var(--text-secondary)' }} className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" style={{ color: 'var(--text-secondary)' }} className="hover:text-white">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: 'var(--text-secondary)' }} className="hover:text-white">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold text-lg mb-4">Contact</h3>
              <ul style={{ color: 'var(--text-secondary)' }} className="space-y-2">
                <li>Email: thea.monet@wickent.org</li>
                <li>Phone: 919-696-0206</li>
                <li>Address: 2912 DEBRA DR, RALEIGH NC 27607-3126</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-wick-800">
            <p className="text-center text-wick-400">
              {new Date().getFullYear()} Wick Enterprises - Fueling the Flames of Health
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
