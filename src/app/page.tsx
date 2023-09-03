"use client";

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Buttonsec from "@/components/ButtonSec";
import ProjectsList from "@/components/ProjectsList";
import FeaturedProjects from "@/components/FeaturedProjects";
import LangAndSkills from "@/components/Lang&Skills";

const Home: NextPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <header className="flex flex-col justify-start items-center py-4 mx-8 text-white md:flex-row md:justify-center md:items-center">
        <div className="">
          <h1 className="md:text-2xl font-bold mb-4 text-black flex justify-center text-center font-maison">
            Hi, my name is Qasim{" "}
            <span className="animate-wave origin-wave">👋</span>
          </h1>
          <p className="md:text-3xl max-sm:text-1xl text-black text-center mb-3 font-mons ">
            Building web-driven enterprises.<br></br> Entrepreneur & Software
            Engineer.
          </p>
          <div>
            <Buttonsec />
          </div>
        </div>
      </header>
      <section className="flex flex-col justify-start items-center py-4 mx-8 text-white md:flex-row md:justify-center md:items-center text-black">
        <div>
          <LangAndSkills />
          <FeaturedProjects />

          <ProjectsList />

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
