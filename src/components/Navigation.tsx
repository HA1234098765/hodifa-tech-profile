
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, FolderOpen, Mail, Newspaper } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "الرئيسية", icon: null },
    { path: "/about", label: "السيرة الذاتية", icon: User },
    { path: "/projects", label: "المشاريع", icon: FolderOpen },
    { path: "/tech-news", label: "أخبار تقنية", icon: Newspaper },
    { path: "/contact", label: "تواصل معي", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
            Hodo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 space-x-reverse px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-400 border-b-2 border-amber-400"
                      : "text-gray-300 hover:text-amber-400"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-amber-500/20">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 space-x-reverse px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-gray-300 hover:text-amber-400 hover:bg-amber-400/5"
                    }`}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
