
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactFormUrl = "https://hodifa.app.n8n.cloud/form/1a159c62-1cbc-4291-ba43-579adb680159";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-amber-400">تواصل</span> معي
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              أتطلع للتعاون معك في مشاريع جديدة ومثيرة. لا تتردد في التواصل معي
            </p>
          </div>

          {/* Contact Form Link */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border-amber-500/30 max-w-2xl mx-auto">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-amber-400 mb-3">نموذج التواصل السريع</h3>
                <p className="text-gray-300 mb-4">
                  يمكنك تعبئة النموذج التفاعلي للتواصل المباشر معي
                </p>
                <Button 
                  asChild
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  <a 
                    href={contactFormUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 ml-2" />
                    افتح نموذج التواصل
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-amber-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-400">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">البريد الإلكتروني</h3>
                      <a 
                        href="mailto:hodifaabdhalmoaz@gmail.com"
                        className="text-gray-400 hover:text-amber-400 transition-colors"
                      >
                        hodifaabdhalmoaz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">أرقام الهاتف</h3>
                      <div className="text-gray-400 space-y-1">
                        <p>+967 777548421</p>
                        <p>+967 718706242</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">الموقع</h3>
                      <p className="text-gray-400">عدن، اليمن</p>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Placeholder for right column */}
            <div className="hidden lg:block">
              <Card className="bg-gray-900/50 border-amber-500/20 h-full">
                <CardContent className="p-8 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-16 h-16 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">مرحباً بك!</h3>
                    <p className="text-gray-300">
                      استخدم النموذج أعلاه للتواصل معي مباشرة
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-900/30 border-amber-500/20 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">مستعد للعمل على مشروعك القادم؟</h3>
                <p className="text-gray-300 mb-6">
                  سواء كان لديك مشروع صغير أو فكرة كبيرة، أنا هنا لمساعدتك في تحويل رؤيتك إلى واقع رقمي.
                </p>
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full"
                  >
                    <a
                      href={contactFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ابدأ مشروعك الآن
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
