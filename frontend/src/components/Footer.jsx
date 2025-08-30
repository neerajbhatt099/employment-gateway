import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">JobPortal</h3>
          <p className="text-sm">
            Your one-stop platform for finding your dream job or hiring top talent.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">For Users</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/jobs" className="hover:underline">Find Jobs</a></li>
            <li><a href="/signup" className="hover:underline">Register</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
