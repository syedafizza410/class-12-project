import React from "react";
import Image from "next/image";

const SponsorSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Our sponsors
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-20">
          <div className="flex justify-center">
            <Image
              src="/Apple.png"
              alt="Apple"
              width={50}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/microsoft 1.png"
              alt="Microsoft"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/Slack.png"
              alt="Slack"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src="/Google.png"
              alt="Google"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
