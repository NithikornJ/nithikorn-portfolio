// sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  return (
    <section id="projects" className="bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        {/* ปุ่ม Filter (สามารถทำให้ใช้งานได้ในอนาคต) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "frontend", "backend", "fullstack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border rounded-md transition ${
                selectedCategory === cat
                  ? "bg-neutral text-white"
                  : "border-primary hover:bg-primary hover:text-neutral-content"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid ของ Project Card */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
