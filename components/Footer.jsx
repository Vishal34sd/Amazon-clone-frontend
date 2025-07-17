import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white text-sm mt-10">
      {/* Main footer links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-16 py-6 border-b border-gray-600">
        <div>
          <h3 className="font-semibold mb-1">Get to Know Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Connect with Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Make Money with Us</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Sell on Amazino</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Let Us Help You</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Logo + Country Selector */}
      <div className="flex flex-col md:flex-row justify-center items-center py-4 gap-3">
        <img
          src="amazino_new.png"
          alt="Amazino Logo"
          className="h-8"
        />
        <select className="bg-[#37475A] border border-gray-600 p-1 rounded text-white text-xs">
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
      </div>

      {/* Legal Bottom */}
      <div className="text-center text-xs text-gray-300 py-3 space-y-1 px-4">
        <div className="flex flex-wrap justify-center gap-3">
          <span className="hover:underline cursor-pointer">Conditions of Use</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
        </div>
        <p>© 1996–2025, Amazino.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
