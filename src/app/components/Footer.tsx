import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-12 px-6 overflow-hidden">
      <div className="container  max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
            <Image
              src="/Logo icon.png"
              alt="Whitepace Logo"
              width={30}
              height={40}
            />
          <h2 className="text-2xl font-bold mb-4">whitepace</h2>
          <p className="text-lg leading-relaxed">
            whitepace was created for the new ways we live and work. We make a better workspace
            around the world.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Customer stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Guides & tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Help center
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Media kit
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-600 my-8"></div>

      <div className="text-center text-sm text-gray-400">
        &copy; 2021 Whitepace LLC.
      </div>
    </footer>
  );
};

export default Footer;
