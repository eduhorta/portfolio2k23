import React, { useState } from "react";

function Portfolio() {
  return (
    <section className="mx-8 mt-48" id="portfolio">
      <h1 className="text-center text-sky-500">Projects</h1>
      <div className="mx-8 mt-8 flex flex-col justify-center md:flex-row md:space-x-8">
        <div className="mt-8 rounded-lg outline outline-2 outline-sky-500">
          <a href="https://checklistcbmba.vercel.app/" target="_blank">
            <img
              className="block h-[360px] w-[540px]"
              src="./checklist.jpg"
              alt="checklist-image"
            />
            <h5 className="rounded-b-lg bg-sky-600 text-center">Checklist</h5>
          </a>
        </div>
        <div className="mt-8 rounded-lg outline outline-2 outline-sky-500">
          <a href="https://fiscalizacaointegrada.vercel.app/" target="_blank">
            <img
              className="block h-[360px] w-[540px]"
              src="./fiscalizacao.jpg"
              alt="fisc-image"
            />
            <h5 className="rounded-b-lg bg-sky-600 text-center">
              Fiscalização Integrada
            </h5>
          </a>
        </div>
        <div className="mt-8 rounded-lg outline outline-2 outline-sky-500">
          <a href="https://memegenerator.vercel.app/" target="_blank">
            <img
              className="block h-[360px] w-[540px]"
              src="./meme.jpg"
              alt="memegenerator"
            />
            <h5 className="rounded-b-lg bg-sky-600 text-center">
              Meme Generator
            </h5>
          </a>
        </div>
        <div className="mt-8 rounded-lg outline outline-2 outline-sky-500">
          <a href="https://tenzies-blush.vercel.app/" target="_blank">
            <img
              className="block h-[360px] w-[540px]"
              src="./tenzies.jpg"
              alt="tenzies"
            />
            <h5 className="rounded-b-lg bg-sky-600 text-center">Tenzies</h5>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
