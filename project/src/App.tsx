import React from 'react';
import { Compass, Hotel, Phone, Mail, MapPin, Calendar, Bus, Camera } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1623604346015-0a883228e0f4?auto=format&fit=crop&w=2000&q=80"
            alt="Tirupati Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Tirupati Travels</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#packages" className="hover:text-yellow-400">Packages</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Divine Tirupati
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Your spiritual journey begins here. Discover the sacred temples and natural beauty of Tirupati.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
            Book Your Journey
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Hotel className="h-8 w-8" />}
            title="Accommodation"
            description="Comfortable stays near temple with modern amenities"
          />
          <ServiceCard
            icon={<Bus className="h-8 w-8" />}
            title="Transportation"
            description="Reliable transport services for temple visits"
          />
          <ServiceCard
            icon={<Camera className="h-8 w-8" />}
            title="Sightseeing"
            description="Guided tours to local attractions and viewpoints"
          />
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Popular Packages</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            image="https://images.unsplash.com/photo-1623604346015-0a883228e0f4?auto=format&fit=crop&w=800&q=80"
            title="Basic Darshan Package"
            price="₹4,999"
            features={["1 Day Trip", "Temple Visit", "Accommodation", "Transport"]}
          />
          <PackageCard
            image="https://images.unsplash.com/photo-1623604346015-0a883228e0f4?auto=format&fit=crop&w=800&q=80"
            title="Premium Package"
            price="₹9,999"
            features={["2 Days Trip", "VIP Darshan", "Luxury Stay", "All Meals"]}
          />
          <PackageCard
            image="https://images.unsplash.com/photo-1623604346015-0a883228e0f4?auto=format&fit=crop&w=800&q=80"
            title="Complete Tour"
            price="₹14,999"
            features={["3 Days Trip", "All Temples", "Resort Stay", "Guide"]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-500" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-yellow-500" />
                <span>info@tirupatitravels.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <span>123 Temple Street, Tirupati, Andhra Pradesh</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-6 w-6" />
              <span className="text-xl font-bold">Tirupati Travels</span>
            </div>
            <p className="text-gray-400">Your trusted partner for spiritual journeys in Tirupati.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#packages" className="hover:text-yellow-400">Packages</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Temple Visits</li>
              <li>Accommodation</li>
              <li>Transportation</li>
              <li>Tour Packages</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Tirupati Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PackageCard({ image, title, price, features }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-yellow-500 mb-4">{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default App;