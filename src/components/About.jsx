import React, { useState } from "react";

function About() {
  return (
    <section id="about">
      <h5 className="mt-32">Get To Know</h5>
      <h1 className="text-center text-sky-500">About me</h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <img className="mt-8 w-56 rounded-2xl md:w-80 " src="./eu-mesmo2.jpg" />
        <div className="mt-8 flex w-96 flex-col items-center justify-center">
          <div className="mb-6 flex space-x-6">
            <a
              href="#portfolio"
              className="flex w-24 flex-col items-center justify-center rounded-lg bg-sky-700 text-center hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="6" r="1" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414L10 11.83z"
                />
                <path
                  fill="currentColor"
                  d="M19 3h-3.298a4.497 4.497 0 0 0-.32-.425l-.01-.012a4.426 4.426 0 0 0-2.89-1.518a2.577 2.577 0 0 0-.964 0a4.426 4.426 0 0 0-2.89 1.518l-.01.012a4.497 4.497 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V6a1.001 1.001 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1.001 1.001 0 0 1 1 1Z"
                />
              </svg>
              <h5 className="mt-1">Projects</h5>
            </a>
            <a
              href="#contact"
              className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-sky-700 text-center hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"
                />
              </svg>
              <h5>Contact</h5>
            </a>
          </div>
          <ul className="ml-8 mr-8 space-y-2 text-sm">
            <li className="text-justify">
              Hi, my name is Eduardo and I am a Civil Engineer/FireFighter.
            </li>
            <li className="text-justify">
              After years of service I am deciding to make a career transition
              to become a FrontEnd developer.
            </li>
            <li className="text-justify">
              I learned to program on my own and now I am preparing my portfolio
              and looking for job opportunities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
