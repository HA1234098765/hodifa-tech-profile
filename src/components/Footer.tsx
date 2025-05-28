
import { Facebook, Linkedin, Twitter, Github, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1E3T83a8KD/",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hodifa-al-hodify-30644b289",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://x.com/moaz_abdh",
      icon: Twitter,
    },
    {
      name: "GitHub",
      url: "https://github.com/HA1234098765",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mwfgwqx",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">معلومات التواصل</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:hodifaabdhalmoaz@gmail.com" className="hover:text-amber-400 transition-colors">
                  hodifaabdhalmoaz@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+967 777548421</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+967 718706242</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">تابعني على</h3>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">حول الموقع</h3>
            <p className="text-gray-300 text-sm">
              الموقع الشخصي لحذيفه الحذيفي، مهندس تقنية معلومات متخصص في تطوير الويب وقواعد البيانات.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              © 2024 حذيفه الحذيفي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
