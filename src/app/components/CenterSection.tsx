import React from "react";
import Link from "next/link";
import Image from "next/image";

const CenterSection = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4 text-black">
            Project <span className="text-black">Management</span>
          </h2>
          <p className="text-gray-600 mb-6 text-xl">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams
            directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <Link href="#" className="inline-block bg-blue-500 text-xl hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started →
          </Link>
        </div>
        <Image src="/img123.png" alt="Project Management" width={500} height={300} className="w-full max-w-full" />
      </div>

      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:space-x-9">
  <div className="relative flex justify-center overflow-hidden">
    <div className="absolute flex items-center justify-center w-20 h-96 bg-white rounded-lg z-10">
      <Image src="/Group 327.png" alt="Center Logo" width={100} height={100} />
    </div>

    <svg className="w-128 h-96" viewBox="0 0 512 512">
      <circle cx="256" cy="256" r="180" fill="none" stroke="#E0E7FF" strokeDasharray="4" strokeWidth="2" />
      <circle cx="256" cy="256" r="120" fill="none" stroke="#E0E7FF" strokeDasharray="4" strokeWidth="2" />

      <circle cx="256" cy="76" r="16" fill="#34D399" />
      <circle cx="256" cy="436" r="16" fill="#FBBF24" />
      <circle cx="76" cy="256" r="16" fill="#F87171" />
      <circle cx="436" cy="256" r="16" fill="#10B981" />
      <circle cx="152" cy="152" r="16" fill="#60A5FA" />
      <circle cx="360" cy="360" r="16" fill="#60A5FA" />
      <circle cx="152" cy="360" r="16" fill="#FBBF24" />
      <circle cx="360" cy="152" r="16" fill="#60A5FA" />
    </svg>
  </div>

  <div className="flex flex-col justify-center text-left">
  <h2 className="text-5xl font-bold mb-4 text-black">
    Work <span className="text-black">together</span>
  </h2>
  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
    With whitepace, share your notes with your colleagues and collaborate on them. You can
    also publish a note to the internet and share the URL with others.
  </p>
  <Link
    href="#"
    className="self-start inline-block bg-blue-500 text-xl hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
  >
    Try it now →
  </Link>
</div>
</div>

    </section>
  );
};

export default CenterSection;
