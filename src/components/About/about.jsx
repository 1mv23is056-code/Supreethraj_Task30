import React from 'react'

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">About Us</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
            Our mission is to build innovative solutions that make a difference.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To empower businesses and individuals with cutting-edge technology that simplifies complex challenges and drives growth.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Innovation</h3>
              <p className="text-gray-600">We constantly push boundaries to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">Quality</h3>
              <p className="text-gray-600">Excellence is at the core of everything we do and build.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest standards of honesty and transparency.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h2>
          <p className="text-gray-600 mb-6">
            Our diverse team brings expertise from various backgrounds and specialties, all united by a shared passion for excellence.
          </p>
          <p className="text-gray-600">
            Together, we've helped hundreds of clients achieve their digital transformation goals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About