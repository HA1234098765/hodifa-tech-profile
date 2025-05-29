
import { ArrowDown, Eye, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import PDFDownload from "@/components/PDFDownload";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback avatar as base64 data URL
  const fallbackAvatar = "data:image/svg+xml;base64," + btoa(`
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F59E0B"/>
          <stop offset="100%" style="stop-color:#D97706"/>
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill="url(#bg)"/>
      <circle cx="200" cy="160" r="60" fill="white" opacity="0.9"/>
      <path d="M 120 280 Q 120 240 160 240 L 240 240 Q 280 240 280 280 L 280 360 L 120 360 Z" fill="white" opacity="0.9"/>
      <text x="200" y="220" font-family="Arial" font-size="80" font-weight="bold" text-anchor="middle" fill="#D97706">ح</text>
    </svg>
  `);

  useEffect(() => {
    setMounted(true);
    // Debug: Log the base URL and image paths
    console.log('Base URL:', import.meta.env.BASE_URL);
    console.log('Profile avatar path:', `${import.meta.env.BASE_URL}images/profile-avatar.svg`);
    console.log('Environment:', import.meta.env.MODE);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-white light:via-gray-50 light:to-gray-100 text-white dark:text-white light:text-gray-900 transition-all duration-500">
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-amber-500/20 border-amber-500/40 hover:bg-amber-500/30 transition-all duration-300 backdrop-blur-sm"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Pattern with Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-ping delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-right animate-fade-in">
              <div className="mb-6">
                <div className="inline-block w-1 h-16 bg-amber-400 ml-4 animate-pulse"></div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-scale-in">
                حذيفه عبدالمعز
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 animate-fade-in delay-300">
                مهندس تقنية معلومات / مطور ويب
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-500">
                <Link to="/contact">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25">
                    تواصل معي
                  </Button>
                </Link>
                
                <Link to="/projects" className="flex items-center space-x-2 space-x-reverse">
                  <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    <Eye className="w-4 h-4 ml-2" />
                    عرض المشاريع
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Enhanced Profile Image */}
            <div className="relative animate-fade-in delay-700">
              <div className="profile-container relative w-80 h-80 lg:w-96 lg:h-96 mx-auto group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 light:from-white light:to-gray-100 rounded-full transition-all duration-500"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {!imageError ? (
                    <img
                      src={fallbackAvatar}
                      alt="حذيفه عبدالمعز الحذيفي"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                      onLoad={() => {
                        setImageLoaded(true);
                        console.log('Profile avatar loaded successfully');
                      }}
                      onError={() => {
                        console.log('Even fallback avatar failed, showing text');
                        setImageError(true);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-6xl font-bold text-white rounded-full shadow-2xl">
                      <span className="drop-shadow-lg">ح</span>
                    </div>
                  )}

                  {/* Loading indicator */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center rounded-full">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
                    </div>
                  )}

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-amber-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-10 w-6 h-6 border-2 border-amber-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-0 w-2 h-20 bg-amber-400/50 animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 right-5 w-3 h-3 bg-amber-300 rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="w-6 h-6 text-amber-400 animate-pulse" />
              <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Overview Section */}
      <section className="py-20 bg-black/50 dark:bg-black/50 light:bg-white/80 backdrop-blur-sm transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-amber-400 mb-4">نبذة تعريفية</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto animate-scale-in"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 dark:bg-gray-900/50 light:bg-white/80 p-8 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in delay-200">
              <h3 className="text-xl font-bold text-amber-400 mb-4">التعليم</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                طالب بكالوريوس تقنية المعلومات في السنة الرابعة بكلية الهندسة، جامعة عدن
              </p>
            </div>

            <div className="bg-gray-900/50 dark:bg-gray-900/50 light:bg-white/80 p-8 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in delay-400">
              <h3 className="text-xl font-bold text-amber-400 mb-4">الخبرة</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                خبرة في تطوير الويب باستخدام Laravel، تصميم قواعد البيانات، وتطوير تطبيقات سطح المكتب
              </p>
            </div>

            <div className="bg-gray-900/50 dark:bg-gray-900/50 light:bg-white/80 p-8 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in delay-600">
              <h3 className="text-xl font-bold text-amber-400 mb-4">المهارات</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                C++, C#, HTML, CSS, JavaScript, PHP, SQL, Laravel, تصميم UX/UI
              </p>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in delay-800">
            <PDFDownload size="lg" className="rounded-full transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
