/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: crypto.randomUUID(), title: "Home", href: "/" },
    { id: crypto.randomUUID(), title: "Shop", href: "/shop" },
    { id: crypto.randomUUID(), title: "About", href: "/about" },
    { id: crypto.randomUUID(), title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="bg-white py-4 md:py-6  w-full z-30">
        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <Image src="/images/logo.png" width={50} height={32} alt="logo" />
            <span className="font-bold text-2xl tracking-normal">Furniro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-14">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-primary font-medium text-base tracking-normal"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex space-x-8">
            <img src="/icons/person.svg" alt="User" />
            <img src="/icons/search.svg" alt="Search" />
            <img src="/icons/heart.svg" alt="Wishlist" />
            <img src="/icons/cart.svg" alt="Cart" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-3/4 max-w-xs p-6 flex flex-col space-y-6">
            {/* Close button */}
            <button
              type="button"
              aria-label="Close menu"
              className="self-end mb-2 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Icons */}
            <div className="flex space-x-6 pt-4 border-t border-gray-200">
              <img src="/icons/person.svg" alt="User" className="w-6 h-6" />
              <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
              <img src="/icons/heart.svg" alt="Wishlist" className="w-6 h-6" />
              <img src="/icons/cart.svg" alt="Cart" className="w-6 h-6" />
            </div>
          </div>

          {/* Click outside closes menu */}
          <div
            className="flex-grow"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
};

export default Header;
