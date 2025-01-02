import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

interface SocialLink {
    icon: typeof Instagram | typeof Twitter | typeof Facebook | any;
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
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4 gap-2 md:gap-4  ">
                        <div className=" md:mb-0">
                            {/* Logo  */}
                            <div className=''>
                                <span className=' cursor-pointer'>
                                    <img className='w-[250px] cursor-pointer  h-[250px] object-cover object-center' src="/logo.png" alt="logo" />
                                </span>
                            </div>

                        </div>

                        <SocialLinks links={socialLinks} />
                    </div>

                    <div className="">
                        <div className="flex flex-col md:flex-row  justify-center gap-4 md:gap-5 items-center">
                            <div className="text-gray-400 hover:text-gray-500  text-sm  md:mb-0">
                                <p className='md:pr-10'> © {new Date().getFullYear()} X POSURE ROOM . All rights reserved.</p>
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
    )
}


const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = "" }) => (
    <div className={`flex space-x-6 ${className}`}>
        {links.map(({ icon: Icon, href, label }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="hover:text-primaryText text-bodyText transition-colors"
            >
                <Icon className="w-6 h-6 " />
            </a>
        ))}
    </div>
);

const socialLinks: SocialLink[] = [
    { icon: Instagram, href: "https://www.instagram.com/example", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/example", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/example", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/channel/example", label: "Youtube" },
];

const footerLinks: FooterLink[] = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" }
];

export default Footer
