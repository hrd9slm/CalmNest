'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/">
          <img src="/images/CalmNest2.png" alt="logo" className="w-36" />
        </Link>
        <div
          id="collapseMenu"
          className={`lg:block ${
            isMenuOpen ? 'block' : 'hidden'
          } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <img src="/images/CalmNest2.png" alt="logo" className="w-36" />
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/"
                className="hover:text-light-pink text-light-pink block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#team"
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#feature"
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/blog"
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/about"
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px]"
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/contact"
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
            <li
              className="relative max-lg:border-b border-gray-300 max-lg:py-3 px-3"
              ref={dropdownRef}
            >
              <button
                onClick={handleToggleDropdown}
                className="hover:text-light-pink text-gray-500 block font-semibold text-[15px] focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/meditations">
                      Méditations & Pleine conscience
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/sleepcasts">
                      Histoires pour s'endormir & Relaxation
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/focus-music">
                      Musique de concentration & Exercices
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/guided-movement">
                      Mouvement guidé
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/chat-coaching">
                      Coaching par chat
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/therapy">Thérapie</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/psychiatry">
                      Psychiatrie (États-Unis uniquement)
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/specialty-care">
                      Soins spécialisés
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/complex-case-management">
                      Gestion des cas complexes
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/work-life">
                      Services de conciliation travail-vie personnelle
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/critical-incident-support">
                      Support en cas d'incident critique
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/workplace-trainings">
                      Formations en milieu de travail
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/services/management-support">
                      Support et consultations pour la gestion
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="flex max-lg:ml-auto space-x-3">
          {isAuthenticated ? (
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={handleToggleProfileDropdown}
                className="text-light-pink hover:text-white text-sm flex items-center hover:bg-light-pink-50 rounded p-1 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[28px] h-[28px]"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 mt-5 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/settings">Settings</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-light-pink-50">
                    <Link href="/logout">Logout</Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-light-pink bg-light-pink transition-all ease-in-out duration-300 hover:bg-transparent hover:text-light-pink">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-light-pink bg-light-pink transition-all ease-in-out duration-300 hover:bg-transparent hover:text-light-pink">
                  Sign up
                </button>
              </Link>
            </>
          )}
          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={handleToggleMenu}
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;