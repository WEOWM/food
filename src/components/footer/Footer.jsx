
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">🍔 Foodies Hub</h2>
            <p className="text-sm">
              Your one-stop destination for delicious meals delivered hot and fresh
              to your doorstep. Taste happiness with every bite!  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">Menu</a></li>
              <li><a href="#" className="hover:text-gray-200">About Us</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-200">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-200">Order Tracking</a></li>
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-sm">📍 Kochi, Kerala, India</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ support@foodieshub.com</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-200"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Foodies Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
