"use client"

import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser"



const ContactUs = () => {
    const formRef = useRef();
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
    <section id="contact">
        <div className="w-full flex-col-reverse flex">
        <motion.div className="flex-[0.75] bg-light p-8 rounded-2xl">
            <p className="sm:text-[18px] text-[14px] text-black-50 uppercase tracking-wider">Get in touch</p>
            <h3 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
            >
                <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">Your Name</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"/>
                </label>
                <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">Your Email</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email address?" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"/>
                </label>
                <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">Your Message</span>
                    <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"/>
                </label>

                <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
                    {loading ? 'Sending...' : "Send" }
                </button>
            </form>
        </motion.div>
    </div>
    </section>
  )
}

export default ContactUs