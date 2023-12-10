"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "/public/images-ngo/zilesimenye-1.jpg";
import img2 from "../../../public/images-ngo/zilesimenye-3.jpg";
import img3 from "../../../public/images-ngo/zilesimenye-11.jpg";
import img4 from "../../../public/images-ngo/zilesemenye x.jpg";
import img5 from "../../../public/images-ngo/zilesimenye-4.jpg";
import { motion } from "framer-motion";

const heroContent = {
  text: {
    subheading: "Welcome to Zilisimenye Elderly Home",
    heading: "UMUNTU AKALAHLWA",
    description:
      "Welcome to our cherished Elderly Home, where understanding, dedication, and the warmth of family converge to create a haven of care and comfort. With our team of compassionate caregivers, we provide round-the-clock residential care for elders, ensuring they receive the love and support they deserve in their golden years. Join us in fostering a nurturing environment where aging is embraced with grace and dignity.",
  },
};

const Hero = () => {
  const handleBackToTopClick = () => {
    window.location.href = '#contact';
  };

  const donateSection = () => {
    window.location.href = '#donation';
  };
  
  return (
    <motion.section
      id="home"
      className="py-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {heroContent.text.subheading && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold mb-7 bg-blue-50 rounded-full capitalize transition-all ease-in">
                {heroContent.text.subheading}
              </span>
            )}

            {heroContent.text.heading && (
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7 leading-tight transition-all ease-in">
                {heroContent.text.heading}
              </h1>
            )}

            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10 transition-all ease-in-out">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
               href='#contact'
               onClick={handleBackToTopClick}
                className="py-4 px-5 bg-blue-600 text-white rounded-lg hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Contact Us
              </Link>

              <Link
                href="#donation"
                onClick={donateSection}
                className="py-4 px-5 bg-secondary text-white rounded-lg hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                <Image
                  src={img1}
                  alt="image-1"
                  width={397}
                  height={406}
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Image
                      src={img2}
                      alt="image-1"
                      width={437}
                      height={437}
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                  <div className="bg-primary rounded-2xl rounded-tr-[200px]"></div>
                </div>
                <div>
                  <Image
                    src={img3}
                    alt="image-1"
                    width={374}
                    height={392}
                    className="object-cover h-full w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
                  <div>
                    <Image
                      src={img4}
                      alt="image-4"
                      width={394}
                      height={394}
                      className="object-cover h-full w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="w-5/12">
                <div>
                  <Image
                    src={img5}
                    alt="image-4"
                    width={446}
                    height={495}
                    className="object-cover h-full w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
