import React from 'react'
import Image from 'next/image'
import Lotus from "/public/images/lotus.png";

const About = () => {
  return (
    <section id='about'>
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
    >
      <p className="text-4xl font-bold">About Us <Image src={Lotus} alt='lotus' className='ml-4 ' /></p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Zilisimenye Elderly Home was established to accomodate senior citizens and look after the neglected and deserted elderly in the communities. We approach each resident as an individual, to respect their independence, privacy and freedom of choice in meeeting their physical/mental, cultural and spiritual needs.
        <br />
        We realised a need for a residential home in the area that will accomodate elderly persons in need of care in the area, many of the previously disadvantaged elderly persons are homeless and deserted. It is shameful to see an elderly/senior citizen struggling for basic needs such as food, healthcare and shelter. Zilisimenye Elderly Home seeks to address these concerns around the Vaal Triangle.
        <br />
        Our future plan is to collaborate with different NGOs, old age homes so
        more can benefit in the society.
      </p>
    </div>
    </section>
  );
}

export default About