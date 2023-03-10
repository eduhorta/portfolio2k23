import React, { useState } from "react";

function Skills() {
  return (
    <section className="mx-8 mt-48" id="skills">
      <h5>What I am learning</h5>
      <h1 className="text-center text-sky-500">Skills</h1>
      <div className="mt-8 flex justify-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#F0DB4F" rx="60" />
            <path
              fill="#323330"
              d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#242938" rx="60" />
            <path
              fill="#00D8FF"
              d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"
            />
            <path
              stroke="#00D8FF"
              strokeWidth="8.911"
              d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z"
              clipRule="evenodd"
            />
            <path
              stroke="#00D8FF"
              strokeWidth="8.911"
              d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z"
              clipRule="evenodd"
            />
            <path
              stroke="#00D8FF"
              strokeWidth="8.911"
              d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
              clipRule="evenodd"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#242938" rx="60" />
            <path
              fill="url(#skillIconsTailwindcssDark0)"
              fillRule="evenodd"
              d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z"
              clipRule="evenodd"
            />
            <defs>
              <linearGradient
                id="skillIconsTailwindcssDark0"
                x1="86.5"
                x2="163.5"
                y1="74"
                y2="185.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#32B1C1" />
                <stop offset="1" stopColor="#14C6B7" />
              </linearGradient>
            </defs>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#764ABC" rx="60" />
            <path
              fill="#fff"
              d="M166.579 165.599c7.381-.764 12.98-7.127 12.725-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.509c-7.89.254-13.998 6.871-13.744 14.761c.255 3.818 1.782 7.126 4.072 9.417c-8.653 17.052-21.887 29.523-41.739 39.958c-13.489 7.126-27.487 9.671-41.485 7.89c-11.453-1.527-20.36-6.618-25.96-15.016c-8.144-12.471-8.907-25.96-2.036-39.449c4.836-9.672 12.471-16.798 17.307-20.361c-1.018-3.308-2.545-8.908-3.309-12.98c-36.903 26.724-33.086 62.864-21.888 79.916c8.4 12.725 25.451 20.615 44.285 20.615c5.09 0 10.18-.509 15.27-1.782c32.578-6.362 57.265-25.705 71.263-54.464Z"
            />
            <path
              fill="#fff"
              d="M211.372 134.04c-19.342-22.652-47.847-35.122-80.424-35.122h-4.072c-2.291-4.582-7.127-7.636-12.471-7.636h-.509c-7.89.255-13.998 6.872-13.744 14.762c.255 7.635 6.617 13.743 14.253 13.743h.509c5.599-.254 10.435-3.817 12.471-8.653h4.581c19.342 0 37.667 5.599 54.21 16.543c12.725 8.399 21.888 19.343 26.978 32.577c4.327 10.689 4.072 21.124-.509 30.032c-7.126 13.489-19.088 20.87-34.868 20.87c-10.18 0-19.851-3.054-24.942-5.345c-2.799 2.545-7.889 6.617-11.452 9.162c10.943 5.09 22.142 7.89 32.831 7.89c24.433 0 42.503-13.489 49.375-26.978c7.381-14.761 6.872-40.212-12.217-61.845Z"
            />
            <path
              fill="#fff"
              d="M82.082 169.926c.255 7.635 6.617 13.743 14.253 13.743h.509c7.889-.255 13.998-6.872 13.743-14.762c-.254-7.635-6.617-13.743-14.252-13.743h-.51c-.508 0-1.272 0-1.78.255c-10.436-17.307-14.762-36.141-13.235-56.501c1.018-15.27 6.108-28.505 15.016-39.45c7.38-9.416 21.633-13.997 31.304-14.252c26.978-.509 38.431 33.086 39.194 46.575c3.309.764 8.908 2.546 12.726 3.818C175.996 54.38 150.545 33 126.112 33c-22.906 0-44.03 16.543-52.429 40.976c-11.707 32.577-4.072 63.881 10.18 88.569c-1.272 1.781-2.035 4.581-1.78 7.381Z"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#3178C6"
            d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
          />
          <path
            fill="#FFF"
            d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Skills;
