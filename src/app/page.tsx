"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Buttonsec from "@/components/ButtonSec";
import ProjectsList from "@/components/ProjectsList";
import LangAndSkills from "@/components/Lang&Skills";
import HiglightedProjects from "@/components/higlightedProjects";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showWave, setShowWave] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <header className="flex flex-col justify-start items-center py-4 mx-8 text-white md:flex-row md:justify-center md:items-center">
        <div className="">
          <h1 className="md:text-2xl font-bold mb-4 text-black flex justify-center text-center font-maison">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString("Hi, my name is Qasim")
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    );
                    if (!cursor) {
                      throw new ReferenceError("Cursor was not found.");
                    }
                    cursor.remove();
                    setShowWave(true);
                  })
                  .pauseFor(1000)
                  .callFunction(() => {
                    setShowContent(true);
                  })
                  .start();
              }}
            />
            {showWave && <span className="animate-wave origin-wave">👋</span>}
          </h1>
        </div>
      </header>
      {showContent && (
        <div className="mx-8 fade-in-long">
          <p className="md:text-3xl max-sm:text-1xl text-black text-center mb-3 font-mons ">
            Building web-driven enterprises.<br></br> Entrepreneur & Software
            Engineer.
          </p>
          <div>
            <Buttonsec />
          </div>
          <section className="flex flex-col justify-start items-center py-4 text-white md:flex-row md:justify-center md:items-center text-black">
            <div>
              <LangAndSkills />
              <HiglightedProjects />
              <ProjectsList />
              <div id="contact">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Home;
