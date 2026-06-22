import React from 'react'

const Contact = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          Have questions or want to work with us? Get in touch with our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 text-2xl">📍</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">123 Tech Street<br/>San Francisco, CA 94105<br/>United States</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-green-600 mr-4 text-2xl">📧</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@example.com<br/>support@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-red-600 mr-4 text-2xl">📱</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="What is this about?" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Weekdays</h3>
              <p className="text-gray-600">Monday - Friday<br/>9:00 AM - 6:00 PM (PST)</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Weekends</h3>
              <p className="text-gray-600">Saturday & Sunday<br/>10:00 AM - 4:00 PM (PST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact