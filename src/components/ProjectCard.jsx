const ProjectCard = ({ title, description, techs, image, link, github }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 badge badge-info badge-outline"
          >
            Live
          </a>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-base-content/70">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techs.map((tech) => (
            <div key={tech} className="badge badge-outline">
              {tech}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
