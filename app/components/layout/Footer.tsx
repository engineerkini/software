import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

interface SocialLink {
  icon: typeof Instagram | typeof Twitter;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const Footer = () => {
  return (
    <div>
      <footer 
        className="text-white py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`        }}
      >
        <div className="container mx-auto px-4">
          <div className="">
            <div className="flex flex-col md:flex-row  justify-center gap-4 md:gap-5 items-center">
              <div className="text-gray-400 hover:text-gray-500  text-sm  md:mb-0">
                <p className="md:pr-10">
                  {" "}
                  © {new Date().getFullYear()} ENGINEER KINI . All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                {footerLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-gray-500 text-sm transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/k.brow_n",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://x.com/EngineerBrown7", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.youtube.com/@funaccnt9",
    label: "Youtube",
  },
];

const footerLinks: FooterLink[] = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default Footer;