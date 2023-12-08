import React from 'react'
import Image from 'next/image'

const servicesContent = {
  heading: {
    headingSubTitle: "Our Efficient Services",
    headingTitle: "Our Services",
    description: "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive care solutions tailored to your family needs"
  },
  items: [
    {
      icon: "/images/icon-1.svg",
      title: "On-site Security & Armed Response",
      description: "On-site security with armed response ensures immediate, trained intervention to protect residents and staff from threats, fostering peace of mind for families"
    },
    {
      icon: "/images/icon-2.svg",
      title: "Elderly Care Monitoring",
      description: "Qualified healthcare professionals keep a watchful eye 24/7, ensuring timely assistance and peace of mind for your loved ones."
    },
    {
      icon: "/images/icon-3.svg",
      title: "Balanced Diet Provision",
      description: "Our chefs whip up delicious, nutritious meals, ensuring a balanced diet for every resident's needs and preferences."
    },
    {
      icon: "/images/icon-4.svg",
      title: "Healthcare Services",
      description: "We handle healthcare needs seamlessly, even arranging transport for hospital visits and medication pickups"
    }, 
    {
      icon: "/images/icon-5.svg",
      title: "Stimulation Programs",
      description: "We keep bodies and minds active with physiotherapy, gentle stretches, and engaging programs, fostering well-being and joy",
    },
    {
      icon: "/images/icon-6.svg",
      title: "Physical Activities",
      description: "We offer a range of gentle physical activities like sewing, baking, and crafting to keep seniors active and engaged.  "
    }, 
  ]
}

const Services = () => {
  return (
    <section className='py-20 bg-light' id='services' >
      <div className='container px-4 mx-auto'>
          <div className='max-w-xl mx-auto text-center mb-20'>
             {servicesContent.heading.headingSubTitle && (
               <span className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative mb-7 before:bg-blue-50 before:left-0 before:top-0 before:bottom-0 before:-z-10 rounded-full capitalize transition-all ease-in">
               {servicesContent.heading.headingSubTitle}
             </span>
             )}

             {servicesContent.heading.headingTitle && (
                <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 ">{servicesContent.heading.headingTitle}</h2>
             )}

            {servicesContent.heading.headingTitle && (
                <p className="text-body leading-relaxed">{servicesContent.heading.description}</p>
             )}  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {servicesContent.items.map((item, idx) => (
                <div className="flex space-x-10" key={item.title}>
                  <div className='w-14 shrink-0'>
                    <span className='inline-flex items-center justify-center p-2 w-[70px] rounded-lg bg-white shadow-2xl'>
                      <Image src={item.icon} alt='zilisemenyehome' width={62} height={62} />
                    </span>
                  </div>
                  <div>
                    {item.title && (
                      <h3 className='text-heading font-bold text-md mb-3'>{item.title}</h3>
                    )}
                    {item.description && (
                      <p className='leading-relaxed'>
                      {item.description}
                    </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Services