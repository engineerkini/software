import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Youtube, Plane } from 'lucide-react';

// types.ts
interface ContactInfo {
  icon: typeof Phone | typeof Mail | typeof MapPin;
  title: string;
  details: string;
}

interface SocialLink {
  icon: typeof Instagram | typeof Twitter | typeof Facebook | any;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

// components/ContactCard.tsx
interface ContactCardProps extends ContactInfo {
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, details, className = "" }) => (
  <div className={`bg-gradient-to-b from-[#1d1c1c95] to-transparent p-6 rounded-[8px] text-center ${className}`}>
    <Icon className="w-8 h-8 text-primaryText mx-auto mb-4" />
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{details}</p>
  </div>
);

// components/GradientText.tsx
interface GradientTextProps {
  parts: Array<{ text: string; highlight?: boolean }>;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ parts, className = "" }) => (
  <h2 className={` text-bodyText text-3xl md:text-5xl font-semibold ${className}`}>
    {parts.map((part, index) => (
      <span key={index} className={part.highlight ? "text-primaryText" : "text-white"}>
        {part.text}
      </span>
    ))}
  </h2>
);

// components/Contact.tsx
const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+250 788 123 456"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@ipraysupport.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kigali, Rwanda"
    }
  ];

  const headingParts = [
    { text: "Ready to " },
    { text: "take your talent", highlight: true },
    { text: " to the next level?" }
  ];

  return (
    <>
      <section id="contact" className="relative w-full bg-backgroundColor py-20 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <GradientText parts={headingParts} className="mb-6" />
            
            <p className="text-gray-400 mb-6 text-bodySmall leading-bodySmall">
              Join a community of artists who are shaping the future.  <br /> 
              Gain hands-on experience, collaborate with industry pros, and build your portfolio.
            </p>

         <div className='flex items-center justify-center'>
         <button className="bg-bgCard hover:bg-[#3f3121c5] text-primaryText px-8 py-3 flex gap-1 items-center justify-center
                             rounded-md  text-bodyDefault font-medium hover:opacity-90 transition-all duration-300">
              <Plane/> Contact Us
            </button >
         </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 xl:gap-6 2xl:gap-8 px-5 lg:px-[50px] xl:px-[100px]  mt-16">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
