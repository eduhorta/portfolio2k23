import React, { useState } from "react";

function About() {
  return (
    <section id="about">
      <h5 className="mt-32">Get To Know</h5>
      <h1 className="text-center text-sky-500">About me</h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <img
          className="mt-8 w-56 rounded-2xl md:w-80 "
          src="./src/assets/eu-mesmo2.jpg"
        />
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
                  d="M14 9.9V8.2q.825-.35 1.688-.525Q16.55 7.5 17.5 7.5q.65 0 1.275.1q.625.1 1.225.25v1.6q-.6-.225-1.212-.337Q18.175 9 17.5 9q-.95 0-1.825.238Q14.8 9.475 14 9.9Zm0 5.5v-1.7q.825-.35 1.688-.525Q16.55 13 17.5 13q.65 0 1.275.1q.625.1 1.225.25v1.6q-.6-.225-1.212-.337q-.613-.113-1.288-.113q-.95 0-1.825.225T14 15.4Zm0-2.75v-1.7q.825-.35 1.688-.525q.862-.175 1.812-.175q.65 0 1.275.1q.625.1 1.225.25v1.6q-.6-.225-1.212-.337q-.613-.113-1.288-.113q-.95 0-1.825.238q-.875.237-1.675.662ZM6.5 16q1.175 0 2.288.262q1.112.263 2.212.788V7.2q-1.025-.6-2.175-.9Q7.675 6 6.5 6q-.9 0-1.787.175Q3.825 6.35 3 6.7v9.9q.875-.3 1.738-.45Q5.6 16 6.5 16Zm6.5 1.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15q.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3q-1.15.3-2.175.9ZM12 20q-1.2-.95-2.6-1.475Q8 18 6.5 18q-1.05 0-2.062.275q-1.013.275-1.938.775q-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525q.137-.25.412-.375q1.15-.6 2.4-.9Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.3 0 2.55.3q1.25.3 2.4.9q.275.125.413.375q.137.25.137.525v12.05q0 .575-.487.875q-.488.3-1.013.025q-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.5 0-2.9.525T12 20Zm-5-8.35Z"
                />
              </svg>
              <h5>Experience</h5>
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
