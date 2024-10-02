import React from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Globe, Menu } from 'lucide-react'

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-3 rounded-md font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
)

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-2xl">&times;</button>
      </div>
      <nav className="flex flex-col items-center space-y-4">
        {['Product', 'Solutions', 'Resources', 'Pricing'].map((item) => (
          <a key={item} href="#" className="text-lg font-medium">
            {item}
          </a>
        ))}
      </nav>
    </div>,
    document.body
  )
}

const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 py-4 bg-white">
        <div className="flex items-center space-x-6">
          <a href="/" className="text-2xl font-bold">
            WIX
          </a>
          <nav className="hidden md:flex space-x-4">
            {['Product', 'Solutions', 'Resources'].map((item) => (
              <div key={item} className="flex items-center">
                <a href="#" className="text-sm font-medium">
                  {item}
                </a>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            ))}
            <a href="#" className="text-sm font-medium">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:inline-flex items-center text-sm font-medium">
            Wix Studio
          </a>
          <a href="#" className="hidden md:inline-flex items-center text-sm font-medium">
            Enterprise
          </a>
          <Button className="hidden md:inline-flex items-center text-sm">
            <Globe className="w-4 h-4 mr-2" />
            EN
          </Button>
          <Button className="text-sm">
            Log In
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm">
            Get Started
          </Button>
          <Button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main className="flex-grow">
        <section className="bg-[#4517ff] text-white py-20 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Create a website without limits
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Build and scale with confidence. From a powerful website builder to advanced business solutions—we've got you covered.
          </p>
          <Button className="bg-white text-[#4517ff] hover:bg-gray-100 text-lg px-8 py-6">
            Get Started
          </Button>
          <p className="mt-4 text-sm">
            Start for free. No credit card required.
          </p>
        </section>
        {/* <section className="bg-[#4517ff] px-4 pb-20">
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-2 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-grow text-center text-xs text-gray-500">https://www.ciaodrinks.com</div>
            </div>
            <div className="p-4">
              <div className="bg-purple-100 rounded-lg p-6 text-center">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">Sparkling Fruit Soda</h2>
                <Button className="bg-purple-600 text-white hover:bg-purple-700">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center leading-tight">
              One platform,<br />infinite possibilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Build a website', 'Manage your business', 'Grow online'].map((title, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && 'Design with a full suite of intuitive tools and powerful AI to create the site you want.'}
                    {index === 1 && 'Streamline your day-to-day with built-in business solutions, tailored to your needs.'}
                    {index === 2 && 'Expand your reach and monetize your website with integrated tools built for your success.'}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-purple-300">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Customize it your way
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Intuitive drag and drop website editor',
                  '1000\'s of advanced web design capabilities',
                  'Powerful AI features for smart customization',
                  'Full-stack web dev tools for custom functionality'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6">
                Get Started
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              {/* <img
                src="/api/placeholder/600/400"
                alt="Wix Editor Interface"
                className="rounded-lg shadow-xl"
              /> */}
              <div className=" inset-0 flex items-center justify-center h-96">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="https://video.wixstatic.com/video/a261d7_46e3c75913564d87a4379c0d8d20f335/360p/mp4/file.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Homepage;