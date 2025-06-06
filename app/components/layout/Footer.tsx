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
      <footer className="text-white py-12">
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
