"use client"

import React, { useState } from 'react';

const LinksNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 transition-all duration-100 ease-in-out hover:bg-gray-100 focus:outline-none"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          Login/Register
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.894.553l3 6a1 1 0 01-.01.914l-3 6A1 1 0 0110 17H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.01-.914l-3-6A1 1 0 015 3h5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a href="/top-rented" target='_blank' className="text-gray-700 block p-1 text-sm " role="menuitem" tabIndex={-1} id="menu-item-0">
              <p className='rounded-xl px-4 py-2 transition-all duration-100 ease-in-out hover:bg-slate-200'>
                Top Rented Items
              </p>
            </a>
            <a href="/featured" target='_blank' className="text-gray-700 block p-1 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
              <p className='rounded-xl px-4 py-2 transition-all duration-100 ease-in-out hover:bg-slate-200'>
                Featured Items
              </p>
            </a>
            <a href="/about" target='_blank' className="text-gray-700 block p-1 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
              <p className='rounded-xl px-4 py-2 transition-all duration-100 ease-in-out hover:bg-slate-200'>
                About Us
              </p>
            </a>
            <div className="border-t border-gray-100"></div>
            <a href="/login" target='_blank' className="text-gray-700 block p-1 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
              <p className='rounded-xl px-4 py-2 transition-all duration-100 ease-in-out hover:bg-green-400'>
                Login/Register
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LinksNavbar;
