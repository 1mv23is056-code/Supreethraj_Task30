import React from 'react'

function Home() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome Home</h1>
        <p className="text-xl text-gray-600 mb-8">
          This is the home page of our React application. We're excited to showcase our latest features and projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Feature One</h3>
            <p className="text-gray-600">Discover amazing features that will help you achieve your goals with our platform.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Feature Two</h3>
            <p className="text-gray-600">Experience seamless integration and powerful tools designed for your success.</p>
          </div>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Latest Updates</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center"><span className="text-purple-600 mr-3">✓</span> New dashboard interface</li>
            <li className="flex items-center"><span className="text-purple-600 mr-3">✓</span> Improved performance</li>
            <li className="flex items-center"><span className="text-purple-600 mr-3">✓</span> Enhanced security</li>
            <li className="flex items-center"><span className="text-purple-600 mr-3">✓</span> Mobile-friendly design</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home