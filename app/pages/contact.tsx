// ContactSection.jsx
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";

interface ContactCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  details: string;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  details,
  className = "",
}) => (
  <div
    className={`bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-500/15 rounded-md p-6 text-center ${className}`}
  >
    <Icon className="w-8 h-8 text-white mx-auto mb-4" />
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-100">{details}</p>
  </div>
);

const ContactSection = () => {
  // Email configuration
  const email = "engineerkini@gmail.com";
  const subject = encodeURIComponent("Software Development Inquiry");
  const body = encodeURIComponent(
    "Hello Fidel,\n\nI am reaching out regarding:\n\n- A potential software development project\n- Collaboration opportunity\n- Other professional inquiry\n\nLooking forward to connecting with you.\n\nBest regards,"
  );
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Me",
      details: "+254 719248067",
    },
    {
      icon: Mail,
      title: "Email Me",
      details: "engineerkini@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-white py-20 h-full">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-black text-3xl md:text-5xl text-center font-semibold">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              bring your project
            </span>{" "}
            to life?
          </h2>
          <p className="text-gray-700 mb-6 text-bodySmall leading-bodySmall">
            Let's collaborate to build something amazing together. <br />
            Whether you need a custom web application, technical consultation,
            or just want to discuss ideas, I'm here to help.
          </p>

          <div className="flex items-center justify-center">
            <a
              href={mailtoLink}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 flex gap-1 items-center justify-center
                           rounded-md text-bodyDefault font-medium hover:opacity-90 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" /> Connect with Me
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6 2xl:gap-8 px-5 lg:px-[50px] xl:px-[100px] mt-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} {...info} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-white text-xl mb-4">Find me on</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/engineerkini"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kini-esther-306729327/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/EngineerBrown7"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
