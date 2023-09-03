import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section className="bg-black dark:bg-primary rounded-md mt-8">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md drop-shadow-lg ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white font-maison">
        Let&apos;s talk
      </h2>

        <p className="mb-8 lg:mb-8 text-center text-white sm:text-xl ">
          Email me at <b>hi@qasim.fyi</b> and I will get back to you!
        </p>
        {/* <form onSubmit={handleSubmit} action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-white dark:bg-white border border-gray-300 text-black dark:text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-grey dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="hi@qasim.fyi" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm  bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 placeholder-grey dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
            </span>
            </button>

          </form> */}
      </div>
    </section>
  );
};

export default ContactForm;
