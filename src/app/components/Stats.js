import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import img1 from "../../../public/images-ngo/zilesimenye-5.jpg";
import img2 from "../../../public/images-ngo/zilisemenye-88.jpg";
import img3 from "../../../public/images-ngo/charity-x.jpg";
import img4 from "../../../public/images-ngo/charity.png";
import img5 from "../../../public/images-ngo/zilesimenye-4.jpg"

import {BiCheck} from 'react-icons/bi'



const donationContent = {
 text: {
    headingSubTitle: 'Donations',
    headingTitle: "Every contribution, from a kind heart to a helping hand, nourishes the lives of our cherished elders.",
    description: "Imagine a steaming bowl of soup warming chilled hands, a cozy knit scarf chasing away winter's bite, a shared story brightening eyes that have seen too many seasons. Your gift, in any form, can be that touch of warmth for our cherished elders A kind donation brings not just comfort, but the knowledge that they're not forgotten. A shared story brings connection. Every bit of love counts",
    features: [
      {
        title: "100% Transparency"
      },
      {
        title: "Audited Impact"
      },
      {
        title: "Visible Change"
      },
      {
        title: "Guaranteed Appreciation"
      },
    ],
 },
 images: {
  img1: "/images-ngo/zilisemenye-88.jpg",
  img2: "/images-ngo/zilisemenye-5.jpg",
  img3: "/images-ngo/zilisemenye-88.jpg",
},
experience: {
  year: "Your Support",
  label: "can assist us."
}
}

const Donation = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden" id="donation">
          <div className="lg:flex space-x-2 justify-between">
              <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
                <div className="flex gap-2">
                  <div className='flex flex-col space-y-2'>
                    <div>
                      <Image src={img1} width={626} height={640} className="object-cover h-full w-full rounded-lg" alt="zilisimenye" />
                    </div>
                    <div className="flex justify-end gap-2">
                        <div className="w-4/12 flex">
                          <div className="ml-auto">
                            <div className="bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                          </div>
                        </div>
                        <div className="w-6/12">
                            <Image
                              src={img2}
                              width={626}
                              height={640}
                              className="object-cover h-full w-full rounded-lg"
                              alt="zilisimenye"
                            />
                       </div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-col gap-2">
                        <div>
                          <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                        </div>

                        <div>
                          <Image src={img3} width={547} height={573} className="object-cover h-full w-full rounded-lg shadow-2xl" alt="zilisimenye" />
                        </div>

                        {donationContent.experience.label && (
                          <div>
                            <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                              <strong className="block font-bold text-primary text-xl lg:text-xl">
                                {donationContent.experience.year}
                              </strong>
                              <span>{donationContent.experience.label}</span>
                            </div>
                          </div>
                        )}
                    </div>
                </div>
                </div>

                
              </div>
              <div className="lg:w-5/12 relative z-10">
                   {donationContent.text.headingSubTitle && (
                     <span className="inline-block py-0.5 z-50 pl-3 text-heading font-bold text-2xl lg:text-4xl relative mb-7 before:bg-blue-50 before:left-0 before:top-0 before:bottom-0 before:-z-10 rounded-full capitalize transition-all ease-in">
                     {donationContent.text.headingSubTitle}
                   </span>
                   )}

                   
                    {donationContent.text.headingTitle && (
                        <h2 className="text-heading text-md lg:text-xl font-bold mb-5">{donationContent.text.headingTitle}</h2>
                    )}
                   
                   {donationContent.text.description && (
                      <p className="text-body leading-relaxed mb-10">
                        {donationContent.text.description}
                      </p>
                   )}

                   <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
                      {donationContent.text.features.map((features, idx) => (
                        <li className="flex flex-grow items-center space-x-5" key={features.title}>
                          <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                              <BiCheck className="text-white text-xl bg-primary"/>
                          </span>
                          <span>{features.title}</span>
                        </li>
                      ))}
                   </ul>
                   
              </div>
          </div>
          

      <div className="bg-white  mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Support Elderly Care</h1>
        <p className="text-xl mb-8">
          Your donation helps provide essential services to our senior community here at our facility.
        </p>

        <div className="mt-8 text-center">
  <p className="text-heading text-xl lg:text-2xl font-bold">
    Donation Options:
  </p>
  <ul className="mb-4">
    <li>
      <BiCheck className="mr-2" />
      Bank Details:
      <br />
      Account Name: Zilisimenye Elderly Home NPO
      <br />
      Account Number: 62756181196
      <br />
      Bank Name: First National Bank
      <br />
      Branch Code: 251337
    </li>
    <li>
      <BiCheck className="mr-2" />
      Physical Donation:
      <br />
      Address: 29 Leeuwkuil Drive, Duncanville, 1939
      <br />
      (We accept cash, checks, and in-kind gifts)
    </li>
  </ul>
  <p className="text-sm">
    We are a non-profit organization and all donations are
    tax-deductible.
  </p>
</div>

      </div>
    </div>
    </section>
  )
}

export default Donation;