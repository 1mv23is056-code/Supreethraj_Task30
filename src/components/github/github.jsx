import React from 'react'

const Github = () => {
  const projects = [
    {
      id: 1,
      name: 'React Router Project',
      description: 'A modern React application with routing capabilities.',
      language: 'JavaScript',
      stars: 145,
      link: '#'
    },
    {
      id: 2,
      name: 'Web Components Library',
      description: 'Reusable UI components for modern web applications.',
      language: 'React',
      stars: 89,
      link: '#'
    },
    {
      id: 3,
      name: 'API REST Client',
      description: 'A lightweight HTTP client for API calls.',
      language: 'JavaScript',
      stars: 234,
      link: '#'
    },
    {
      id: 4,
      name: 'State Management Tool',
      description: 'Simplified state management solution for React apps.',
      language: 'TypeScript',
      stars: 567,
      link: '#'
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="text-5xl mr-4">🐙</div>
          <h1 className="text-5xl font-bold text-gray-800">GitHub Projects</h1>
        </div>
        
        <p className="text-xl text-gray-600 mb-12">
          Explore our latest open-source projects and contributions on GitHub.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded">⭐ {project.stars}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                  {project.language}
                </span>
                <a href={project.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">GitHub Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24</div>
              <p className="text-gray-300">Public Repositories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1.2K</div>
              <p className="text-gray-300">Total Stars</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">450</div>
              <p className="text-gray-300">Contributions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">89</div>
              <p className="text-gray-300">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github