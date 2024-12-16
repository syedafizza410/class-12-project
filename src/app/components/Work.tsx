import React from "react";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section className="bg-[#003366] text-white py-16 px-6">
      <div className="container mx-auto text-center max-w-screen-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your work, <span className="text-white">everywhere you are</span>
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 px-4">
          Access your notes from your computer, phone or tablet by synchronising with various services, 
          including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, 
          and iOS. A terminal app is also available!
        </p>
        
        <Link
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-lg"
        >
          Try Taskey →
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;
