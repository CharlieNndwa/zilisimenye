"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiChevronRight} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import {HiPhone, HiMiniGlobeAmericas, HiMiniHeart} from 'react-icons/hi2'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const footerContent = {
    about: {
        logo: "/images-ngo/zilesimenye.jpg",
        description: "Feel free to explore our website to discover more about us, you are also more than welcome to visit our facility. We look forward to hearing from you soon.",
        cta: {
            href: "#services",
            label: "Learn more",
        }
    },
    contact: {
        heading: "Contact",
        description: "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
        address: {
            street: "29 Leeuwkuil Drive, Duncanville, 1939",
            phone: "016 426 0006 / +27 76 036 0344 ",
            email: "Zilisimenye@gmail.com",
        }
    },
    bank: {
        heading: "Banking details",
        description: "Account Name: Zilisimenye Elderly Home NPO",
        address: {
            street: "Account No.: 62756181196 ",
            phone: "Bank Name: First National Bank",
            email: "Branch Code: 251337",
        }
    },
    
    copyright: {
        labelOne: "Copyright 2023. © Zilisimenye Home",
        labelTwo: "All rights reserved",
    }

}

const Footer = () => {
  return (
    <footer role="contentInfo" className='py-20 bg-white'>
        <div className="container px-4 mx-auto">
            <div className="block lg:flex gap-20 mb-10 pb-10 ">
                <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                    <Link href="/" className="mb-4 inline-block">
                        <Image src={footerContent.about.logo} width={157} height={30} alt="zilisimenye" />
                    </Link>
                    <p className='leading-relaxed mb-7'>
                        {footerContent.about.description}
                    </p>
                    <p>
                        <Link href={footerContent.about.cta.href} className="flex space-x-2 outline-none items-center font-semibold text-primary group">
                            <span>{footerContent.about.cta.label}</span>
                            <span className='w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary'>
                                <BiChevronRight className="text-lg"/>
                            </span>
                        </Link>
                    </p>
                </div>
                <div className='w-full lg:w-4/12'>
                    <h3 className='font-semibold text-heading mb-5'>
                        {footerContent.bank.heading}
                    </h3>
                    <p className='leading-relaxed mb-7 '>
                        {footerContent.bank.description}
                    </p>
                    <ul>
                        <li className='flex items-start space-x-3 mb-5'>
                            <FaCircleCheck className='text-xl text-primary'/>
                            <span>{footerContent.bank.address.street}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <FaCircleCheck className='text-xl text-primary'/>
                            <span>{footerContent.bank.address.phone}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <FaCircleCheck className='text-xl text-primary'/>
                            <span>{footerContent.bank.address.email}</span>
                        </li>
                    </ul>
                </div>
                <div className='w-full lg:w-4/12'>
                    <h3 className='font-semibold text-heading mb-5'>
                        {footerContent.contact.heading}
                    </h3>
                    <p className='leading-relaxed mb-7 '>
                        {footerContent.contact.description}
                    </p>
                    <ul>
                        <li className='flex items-start space-x-3 mb-5'>
                            <HiLocationMarker className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.street}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <HiPhone className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.phone}</span>
                        </li>
                        <li className='flex items-start space-x-3 mb-5'>
                            <MdOutlineMarkEmailUnread className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.email}</span>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="text-center pt-10 border-t border-gray-200">
                <p>
                    {footerContent.copyright.labelOne}{" "}
                    {footerContent.copyright.labelTwo}
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer