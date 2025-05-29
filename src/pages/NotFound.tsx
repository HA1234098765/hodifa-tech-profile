import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-amber-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-300 mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Home className="w-4 h-4 ml-2" />
              العودة للرئيسية
            </Button>
          </Link>

          <div className="text-sm text-gray-400">
            أو يمكنك <button onClick={() => window.history.back()} className="text-amber-400 hover:text-amber-300 underline">العودة للصفحة السابقة</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
