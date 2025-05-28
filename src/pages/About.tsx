import { GraduationCap, Briefcase, Award, Languages } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PDFDownload from "@/components/PDFDownload";

const About = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/profile-new.jpg"
                    alt="حذيفه عبدالمعز الحذيفي"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    onError={(e) => {
                      // Fallback to old image if new one fails to load
                      (e.target as HTMLImageElement).src = "/lovable-uploads/1b7275d0-9db2-4ece-951a-c68c19378349.png";
                    }}
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-amber-400">السيرة</span> الذاتية
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <div className="flex justify-center">
              <PDFDownload variant="card" className="max-w-sm" />
            </div>
          </div>

          {/* Personal Info */}
          <Card className="bg-gray-900/50 border-amber-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400 text-center">
                حذيفه عبدالمعز عبدالرحمان محمد حاتم الحذيفي
              </CardTitle>
              <p className="text-xl text-center text-gray-300">مهندس تقنية معلومات</p>
            </CardHeader>
          </Card>

          <Card className="bg-gray-900/50 border-amber-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-amber-400 flex items-center">
                <Briefcase className="w-5 h-5 ml-2" />
                الملخص المهني
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                طالب تقنية المعلومات في السنة الرابعة في كلية الهندسة جامعة عدن، لدي خبرة متواضعة في بعض لغات البرمجة وهي: 
                C++, C#, Html, Css, Js, Php, Sql كما أنني قد عملت مسبقا في تطوير عدة برامج ويندوز بسيطة بلغة C# وقد انتقلت حاليا إلى مجال الويب وعملت مشروع شبه مكتمل بواسطة بيئة Laravel 11 حيث أنني أجري التطوير عليه، إضافة إلى ذلك لدي خبرة متواضعة في تصميم قواعد البيانات وعملت على Sqlserver و Mysql وكذلك لدي معرفة في جانب هندسة وتحليل البرمجيات وأيضا معرفة بسيطة في جانب Design pattern، كما أنني أتطلع إلى التعلم أكثر وتطوير خبرتي العملية بشكل أوسع.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-900/50 border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-amber-400 flex items-center">
                  <GraduationCap className="w-5 h-5 ml-2" />
                  التعليم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-200">جامعة عدن - كلية الهندسة</h3>
                    <p className="text-gray-400">طالب بكلاريوس – تقنية المعلومات</p>
                    <p className="text-gray-400">السنة الرابعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-amber-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-amber-400 flex items-center">
                  <Languages className="w-5 h-5 ml-2" />
                  اللغات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">العربية</span>
                    <span className="text-amber-400">الأم</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">الإنجليزية</span>
                    <span className="text-amber-400">ممتاز</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">الفرنسية</span>
                    <span className="text-amber-400">متوسط</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/50 border-amber-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-amber-400 flex items-center">
                <Briefcase className="w-5 h-5 ml-2" />
                الخبرة العملية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-r-2 border-amber-500 pr-4">
                  <p className="text-gray-300">عملت كشريك في احدى المعاهد التقنية في تحليل قواعد البيانات لمدرسة في احدى القرى اليمنية.</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <p className="text-gray-300">كما أنني أعمل في مجال التجارة الحرة.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-amber-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-amber-400">المشاريع</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200 mb-2">برنامج إدارة الحجز</h4>
                  <p className="text-gray-300">بناء برنامج desktop حر وبسيط في عمليات الحجز وفكرة البرنامج شاملة لأي جانب يتطلب إدارة الحجز بشكل عام.</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200 mb-2">متجر إلكتروني - Laravel 11</h4>
                  <p className="text-gray-300">بناء موقع تجاري حر بإستخدام بيئة التعامل Laravel11 وقد خصصت الموقع أن يكون متجر يلبي احتياجات الأطفال حديثي الولادة حتى سن السنتين ويجري التطوير عليه إلى أن يكون الموقع أكثر مرونة لأي جانب تجاري محتمل.</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200 mb-2">تصميم قواعد البيانات للمدارس</h4>
                  <p className="text-gray-300">عملت كشريك في تحليل وتصميم قواعد بيانات لأحدى مدارس القرى اليمنية</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200 mb-2">نظام إدارة الفنادق</h4>
                  <p className="text-gray-300">تحليل وتصميم قاعدة بيانات لأحد الفنادق في عدن</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-amber-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-amber-400 flex items-center">
                <Award className="w-5 h-5 ml-2" />
                الدورات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">أساسيات البرمجة و C++</h4>
                  <p className="text-gray-400">منصة Programming Advices الأردنية (2022-2024)</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">تطوير تطبيقات سطح المكتب</h4>
                  <p className="text-gray-400">منصة Programming Advices الأردنية (2024)</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">تطوير المواقع Frontend</h4>
                  <p className="text-gray-400">منصة Alzero Web School المصرية</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">تطوير المواقع Backend</h4>
                  <p className="text-gray-400">أكاديمية الجيل العربي - اليمن</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">اللغة الإنجليزية</h4>
                  <p className="text-gray-400">معهد أميدست الأمريكي - عدن (سنة كاملة)</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">CCNA</h4>
                  <p className="text-gray-400">سبتمبر 2023</p>
                </div>
                <div className="border-r-2 border-amber-500 pr-4">
                  <h4 className="font-semibold text-gray-200">CPS</h4>
                  <p className="text-gray-400">معهد أميديست الأمريكي</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-amber-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-amber-400">المهارات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">المهارات التقنية</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• إجادة استخدام برامج Microsoft Office</li>
                    <li>• مصمم UX/UI باستخدام Figma</li>
                    <li>• لغات البرمجة: C++, C#, HTML, CSS, JS, PHP, SQL</li>
                    <li>• إطار العمل: Laravel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">المهارات الشخصية</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• سريع التعلم</li>
                    <li>• مهارة التواصل</li>
                    <li>• العمل ضمن فريق</li>
                    <li>• مواكبة أي تقنية جديدة</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
