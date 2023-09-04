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
      </div>
    </section>
  );
};

export default ContactForm;
