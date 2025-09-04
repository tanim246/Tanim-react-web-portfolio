import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaVimeoV,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-green-900 to-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/4VdLQJY/logo.png"
              alt="Elito Logo"
              className="w-12 h-12 rounded-full"
            />
            <h2 className="text-2xl font-bold">
              Tanim<span className="text-red-400"> .</span>
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaPinterestP />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaVimeoV />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-green-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Video Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Recent Post
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">All Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-green-400">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Brand Identity
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
          <div className="flex items-center bg-black/40 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="px-3 py-2 w-full bg-transparent text-sm focus:outline-none"
            />
            <button className="mr-2 cursor-pointer hover:text-green-600"><MdEmail size={24} /></button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm border-t border-gray-700 mt-10 pt-4">
        Copyright © 2025 Elito. All rights reserved.
        {/* <div className="text-left">
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          
        </div> */}
      </div>

      {/* Scroll to Top */}
      <button
        className="fixed cursor-pointer bottom-6 right-6  p-3 rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="loading loading-spinner text-error"></span>
      </button>
    </footer>
  );
};

export default Footer;
