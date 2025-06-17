import React from "react";
import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard";

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-30 pb-16">
      <div className="px-4">
        {/* หัวข้อหลัก */}
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-base-content mb-12 max-w-2xl mx-auto">
          Driven by a deep passion for technology and equipped with extensive
          knowledge in software development, I am actively seeking opportunities
          to make an impact in the evolving world of technology.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* แนะนำตัว */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get to Know Me</h3>
            <p className="mb-4">
              I'm a passionate <strong>Frontend Developer</strong> who started
              with a solid foundation in HTML/CSS and is now continuously
              improving skills in JavaScript and React to build beautiful and
              user-friendly websites.
            </p>
            <p className="mb-4">
              Currently, I'm practicing through various small projects and
              aiming to become a <strong>Fullstack Developer</strong> in the
              near future.
            </p>
            <p className="mb-6">
              I'm seeking <strong>junior frontend</strong> roles where I can
              gain real-world experience and grow my skills in a professional
              environment.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>

          {/* Skills เป็นกรอบรูป + hover */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
