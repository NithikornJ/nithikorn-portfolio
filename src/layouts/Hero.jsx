import React from "react";
import { IoLogoGithub } from "react-icons/io";
export default function Hero() {
  return (
    <>
      <section id="home" className="hero min-h-screen pt-20 lg:pt-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/assets/img-profile.jpg"
            className="max-w-sm rounded-lg shadow-2xl opacity-0 animate-[fadeIn_1s_ease-in-out_forwards] hover:scale-105 transition-transform duration-300"
            alt="Nithikorn"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Nithikorn Jomsantia</h1>
            <p className="py-6">
              I'm an aspiring frontend developer, currently learning the basics
              of web development. My goal is to become a fullstack developer in
              the near future.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn btn-primary">
                See My Projects
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                Download Resume
              </a>
              <a
                href="https://github.com/NithikornJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-neutral hover:text-primary"
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </section>      
    </>
  );
}
