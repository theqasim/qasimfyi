import React, { useEffect, useState } from "react";
import Image from "next/image";
import ShowMore from "./ShowMore";

function handleClick() {
  const hiddenProjectsDiv = document.getElementById("hidden-projects");
  const showMoreButtonContainer = document.getElementById("button-container");
  if (hiddenProjectsDiv) {
    hiddenProjectsDiv.classList.remove("hidden");
  }
  if (showMoreButtonContainer) {
    showMoreButtonContainer.remove();
  }
}

const ProjectsList = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold mb-4 my-4 text-black mt-8">
          <a className="text-black hover:text-black transition-all duration-500 ease-in-out border-b-4 border-transparent hover:border-black text-black font-maison">
            Other Projects
          </a>
        </h1>
        <div className="grid grid-cols-2 gap-4 py-3 max-md:grid-cols-1 md:place-items-center max-sm:grid-cols-1 max-sm:place-items-center mb-4">
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a href="https://youtu.be/zB0Tv9nHeOs" target="_blank">
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4 "
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 text-2xl max-sm:text-xl font-maison">
              NFT Discord Application
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              A Discord bot built to retrieve information on NFT&apos;s (sales,
              listings, floor prices) across a variety of marketplaces. The
              application served over 30,000 users.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nodejs.svg"
                height={32}
                width={32}
                alt="NodeJS"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a href="https://github.com/theqasim/howtogym" target="_blank">
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4"
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 max-sm:text-xl text-2xl font-maison">
              Gym Workout Website
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              A website built to store workout programs, and be responsive for
              all devices. Instructions on exercise execution and a video is
              accompanied for each exercise.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/html.png"
                height={32}
                width={32}
                alt="HTML"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/css.svg"
                height={32}
                width={32}
                alt="CSS"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a
              href="https://github.com/theqasim/calorietracker"
              target="_blank"
            >
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4"
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Calorie Tracking Platform
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              A platform that enables users to track their daily calorie intake
              and expenditure with ease. This platform accurately calculates the
              caloric content of meals, and provides insights into the calories
              burned during exercise. All information is accurate to ensure
              users are being provided the most accurate data when using the
              platform.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/html.png"
                height={32}
                width={32}
                alt="HTML"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/css.svg"
                height={32}
                width={32}
                alt="CSS"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a href="https://youtu.be/zB0Tv9nHeOs" target="_blank">
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4 "
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Cryptocurrency Info Application
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              This tool provides powerful features for monitoring the latest
              cryptocurrency information, including prices, market cap, and
              price changes across different time periods. Stay updated
              effortlessly with the current state of the cryptocurrency market
              using this comprehensive tracking tool.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nodejs.svg"
                height={32}
                width={32}
                alt="NodeJS"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
            </div>
          </div>
        </div>
        <div
          id="hidden-projects"
          className="grid grid-cols-2 gap-4 py-3 max-md:grid-cols-1 md:place-items-center max-sm:grid-cols-1 max-sm:place-items-center mb-4 hidden"
        >
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a href="https://qasim.fyi" target="_blank">
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4"
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Portfolio Website
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              A website designed to highlight my skillset, showcase my portfolio
              of projects, and provide access to my resume/CV. This website
              serves as a point of contact for potential clients and employers.
              With a fully responsive design that adapts to all devices, this
              website offers a great experience for all visitors.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nextjs.svg"
                height={32}
                width={32}
                alt="Nextjs"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/tailwindcss.svg"
                height={32}
                width={32}
                alt="typescript"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/ts.png"
                height={32}
                width={32}
                alt="typescript"
                className=" drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />
            <a href="https://youtu.be/RKObsJUPObs" target="_blank">
              <Image
                src="/resources/assets/newtab.png"
                height={40}
                width={40}
                className="absolute top-3 right-0 mt-1 mr-4"
                alt="Project Source"
              />
            </a>

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Opensea Monitors
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              The application is a cutting-edge tool that monitors sales,
              listings, and bids on Opensea collections. It sends real-time
              notifications to users within a second of any monitored collection
              event occurring, empowering them to stay on top of the latest
              evelopments and make informed investment decisions.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nodejs.svg"
                height={32}
                width={32}
                alt="NodeJS"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Ramadan API Reminder
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              This project uses MongoDB and a custom API to send daily SMS
              messages, 15 minutes before the start of the daily fast during
              Ramadan, to a large recipient list. The messages inform the number
              of remaining fasts until the end of Ramadan, helping people keep
              track of their fasts.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nodejs.svg"
                height={32}
                width={32}
                alt="NodeJS"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/mongodb.png"
                height={32}
                width={32}
                alt="Mongodb"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              Prime Hydration Tracker
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              A Prime Hydration tracker that provides real-time notifications to
              the user, alerting them within a fraction of a second when any
              flavor becomes available, and providing a direct checkout URL,
              enabling the product to be instantly added to the user&apos;s
              basket.
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/nodejs.svg"
                height={32}
                width={32}
                alt="NodeJS"
                className=" drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
            </div>
          </div>
          <div className="text-black bg-white rounded-lg p-4 h-70 w-96 transition ease-in-out delay-120 hover:-translate-y-2 duration-300 relative drop-shadow-lg">
            <Image
              priority
              src="/resources/assets/folder.png"
              height={40}
              width={40}
              alt="folder icon"
              className="mb-4 ml-1 "
            />

            <h1 className=" font-bold mb-2 ml-1 text-2xl font-maison max-sm:text-xl">
              YouTube Tag Generator
            </h1>
            <p className="text-sm my-6 mb-2 ml-1 w-10/12 font-semibold">
              Developed an advanced application that enables users to input a
              search term, and receive a curated list of optimized YouTube video
              tags, with the aim of enhancing their video&apos;s SEO
              performance, thereby ensuring maximum reach and visibility.{" "}
            </p>
            <div className="grid grid-cols-8 my-5 mb-1 ml-1 font-bold py-3">
              <Image
                priority
                src="/resources/assets/html.png"
                height={32}
                width={32}
                alt="HTML"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/js.png"
                height={32}
                width={32}
                alt="JavaScript"
                className="drop-shadow"
              />
              <Image
                priority
                src="/resources/assets/css.svg"
                height={32}
                width={32}
                alt="CSS"
                className="drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="button-container"
        className="flex flex-row justify-center items-center"
      >
        <ShowMore onClick={handleClick} />
      </div>
    </section>
  );
};

export default ProjectsList;
