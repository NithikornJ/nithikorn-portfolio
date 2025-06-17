// sections/Contact.jsx
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-base-content/70">
          I'm open to collaboration, freelance work, or just a friendly hello.
          Feel free to reach out using the form below or through my contact details.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 text-left">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-primary" />
              <a href="mailto:nithikorn.jst@gmail.com" className="link">
                nithikorn.jst@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl text-primary" />
              <a href="tel:0932173506" className="link">
                +66 93 217 3506
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-primary" />
              <span>Phitsanulok, Thailand</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <button type="submit" className="btn btn-neutral w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
