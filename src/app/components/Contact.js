"use client";

import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser"


const Contact = () => {
  const formRef =useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({ ...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // NVOy2d47oW9pRVgUa
        // template_7x4f6xt
        // service_3seo90z

        emailjs.send(
        'service_3seo90z', 
        'template_7x4f6xt', 
        {
            from_name: form.name,
            to_name: 'Zilisimenye',
            from_email: form.email,
            to_email: 'zilisimenyeinbox@gmail.com',
            message: form.message,
        },
        // publishable key
        'NVOy2d47oW9pRVgUa'
        )
        .then(() => {
            setLoading(false);
            alert('Thank You. I will get back to you as soon as possible.');

            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            setLoading(false)

            console.log(error);

            alert('Something went wrong.')
        })
    }


  return (
    <motion.section
      id="contact"
      // ref={formRef}
      // onSubmit={handleSubmit}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
              <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
                    {loading ? 'Sending...' : "Send"}
                </button>
      </form>
    </motion.section>
  );
}

export default Contact;