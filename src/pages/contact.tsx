import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 style={{ color: 'var(--text-primary)' }} className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-flame-500 to-health-500 mx-auto mb-8"></div>
          <p style={{ color: 'var(--text-secondary)' }} className="text-xl max-w-3xl mx-auto">
            Have questions or want to learn more about our services? 
            We'd love to hear from you and help ignite positive change in your community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="rounded-lg shadow-xl p-8">
            {status.message && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-flame-500 focus:border-flame-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-flame-500 to-health-500 text-white py-3 px-6 rounded-md hover:from-flame-600 hover:to-health-600 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="text-center p-6 rounded-lg shadow-md">
              <div className="text-flame-500 text-2xl mb-4">📍</div>
              <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold mb-2">Address</h3>
              <p style={{ color: 'var(--text-secondary)' }}>2912 DEBRA DR<br />RALEIGH NC 27607-3126</p>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="text-center p-6 rounded-lg shadow-md">
              <div className="text-flame-500 text-2xl mb-4">📞</div>
              <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold mb-2">Phone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>919-696-0206</p>
            </div>
            <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="text-center p-6 rounded-lg shadow-md">
              <div className="text-flame-500 text-2xl mb-4">✉️</div>
              <h3 style={{ color: 'var(--text-primary)' }} className="font-semibold mb-2">Email</h3>
              <p style={{ color: 'var(--text-secondary)' }}>thea.monet@wickent.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
