import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#003366] text-white py-16 px-6 w-full overflow-hidden">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get More Done with <br /> <span className="text-white">whitepace</span>
          </h1>
          <p className="text-xl mb-6">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
          <Link
            href="#"
            className="inline-block text-xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Try Whitepace free →
          </Link>
        </div>

        <div className="lg:w-1/2 flex justify-center overflow-hidden">
          <Image src="/img123.png" alt="Hero Image" width={500} height={300} className="w-full max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
