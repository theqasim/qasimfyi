import React, { useEffect, useState } from "react";
import Image from "next/image";

const LangAndSkills = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-4">
        <a className="text-black hover:text-black transition-all duration-500 ease-in-out border-b-4 border-transparent hover:border-black text-black font-maison">
          Languages & Skills
        </a>
      </h1>
      <p className="text-xl text-black">
        My skillset spans across multiple niches, such as content creation, SEO
        & development.
      </p>

      <div className="grid grid-cols-4 gap-4 py-3 text-black">
        <ul className="list-none">
          <Image
            priority
            src="/resources/assets/ts.png"
            height={32}
            width={32}
            alt="TypeScript"
            className="drop-shadow mb-1"
          />

          <Image
            priority
            src="/resources/assets/js.png"
            height={32}
            width={32}
            alt="JavaScript"
            className="drop-shadow mb-1"
          />
          <Image
            priority
            src="/resources/assets/css.svg"
            height={32}
            width={32}
            alt="CSS"
            className="mb-1 drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/html.png"
            height={32}
            width={32}
            alt="HTML"
            className="drop-shadow"
          />
        </ul>
        <ul className="list-none ">
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
            alt="TailwindCSS"
            className="mt-1 drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/nodejs.svg"
            height={32}
            width={32}
            alt="NodeJS"
            className="mt-1 drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/python.svg"
            height={32}
            width={32}
            alt="Python"
            className="mt-1 drop-shadow"
          />
        </ul>
        <ul className="list-none">
          <Image
            priority
            src="/resources/assets/c++.svg"
            height={32}
            width={32}
            alt="C++"
            className="drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/csharp.svg"
            height={32}
            width={32}
            alt="C#"
            className="mt-1 drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/java.svg"
            height={32}
            width={32}
            alt="Java"
            className="mt-1 drop-shadow"
          />
          <Image
            priority
            src="/resources/assets/mysql.svg"
            height={32}
            width={32}
            alt="MYSQL"
            className="mt-1 drop-shadow"
          />
        </ul>
        <ul className="text-lg list-none drop-shadow max-sm:text-sm font-mons">
          <li className="font-bold">SEO</li>
          <li className="font-bold">Project Management</li>
          <li className="font-bold">Copywriting</li>
          <li className="font-bold">Email Marketing</li>
          <li className="font-bold">Paid Ads</li>
        </ul>
      </div>
    </div>
  );
};

export default LangAndSkills;
