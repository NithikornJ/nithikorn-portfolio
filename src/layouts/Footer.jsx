import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: ชื่อและปี */}
        <div className="text-center md:text-left">
          <p className="font-semibold">© {new Date().getFullYear()} Nithikorn Jomsantia</p>
          <p className="text-sm opacity-60">Computer Engineering | Naresuan University</p>
        </div>

        {/* Right: ไอคอนโซเชียล */}
        <div className="flex gap-6 text-2xl">
          <a
            href="mailto:nithikorn.jst@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/NithikornJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nithikornj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
