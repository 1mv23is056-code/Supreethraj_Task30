

import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-6">Welcome to React Router</h1>
          <p className="text-lg text-gray-600">This is your main content area.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
