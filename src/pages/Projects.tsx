import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "برنامج إدارة الحجز",
      description: "برنامج desktop بسيط ومجاني لإدارة عمليات الحجز. يمكن استخدامه في أي مجال يتطلب إدارة الحجوزات بشكل عام.",
      technologies: ["C#", "Windows Forms", "SQL Server"],
      type: "تطبيق سطح المكتب",
      status: "مكتمل",
      year: "2023",
      features: [
        "واجهة مستخدم بسيطة وسهلة الاستخدام",
        "إدارة شاملة للحجوزات",
        "تقارير تفصيلية",
        "حفظ البيانات محلياً"
      ]
    },
    {
      id: 2,
      title: "متجر إلكتروني للأطفال",
      description: "متجر إلكتروني متكامل مخصص لبيع منتجات الأطفال حديثي الولادة حتى سن السنتين. تم تطويره باستخدام Laravel 11.",
      technologies: ["Laravel 11", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      type: "موقع ويب",
      status: "قيد التطوير",
      year: "2024",
      githubUrl: "https://github.com/HA1234098765/baby-store",
      features: [
        "نظام إدارة المنتجات",
        "سلة التسوق",
        "نظام الدفع الإلكتروني",
        "لوحة تحكم المدير",
        "نظام إدارة الطلبات"
      ]
    },
    {
      id: 3,
      title: "نظام إدارة قاعدة بيانات المدرسة",
      description: "تحليل وتصميم قاعدة بيانات شاملة لإدارة مدرسة في إحدى القرى اليمنية، تشمل إدارة الطلاب والمعلمين والدرجات.",
      technologies: ["SQL Server", "Database Design", "ERD"],
      type: "قاعدة بيانات",
      status: "مكتمل",
      year: "2023",
      features: [
        "إدارة بيانات الطلاب",
        "إدارة بيانات المعلمين",
        "نظام الدرجات والتقييم",
        "التقارير الأكاديمية"
      ]
    },
    {
      id: 4,
      title: "نظام إدارة الفندق",
      description: "تحليل وتصميم قاعدة بيانات متكاملة لإدارة أحد الفنادق في عدن، تشمل إدارة الحجوزات والغرف والعملاء.",
      technologies: ["MySQL", "Database Design", "ERD"],
      type: "قاعدة بيانات",
      status: "مكتمل",
      year: "2024",
      features: [
        "إدارة الحجوزات",
        "إدارة الغرف والأسعار",
        "إدارة بيانات العملاء",
        "التقارير المالية"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-amber-400">المشاريع</span> والأعمال
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              مجموعة من المشاريع التي عملت عليها في مجالات تطوير الويب، تطبيقات سطح المكتب، وتصميم قواعد البيانات
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-gray-900/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-400">
                        <span className="flex items-center">
                          <Code className="w-4 h-4 ml-1" />
                          {project.type}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 ml-1" />
                          {project.year}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'مكتمل' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">التقنيات المستخدمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">المميزات الرئيسية:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-400 ml-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {'githubUrl' in project && project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 ml-1" />
                          الكود المصدري
                        </a>
                      </Button>
                    )}
                    
                    {'liveUrl' in project && (project as any).liveUrl && (
                      <Button 
                        className="bg-amber-500 hover:bg-amber-600 text-black transition-all duration-300"
                        size="sm"
                        asChild
                      >
                        <a href={(project as any).liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 ml-1" />
                          معاينة مباشرة
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gray-900/30 border-amber-500/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">هل لديك مشروع في ذهنك؟</h3>
                <p className="text-gray-300 mb-6">
                  أنا متاح للعمل على مشاريع جديدة ومثيرة. دعنا نتعاون لتحويل فكرتك إلى واقع.
                </p>
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="/contact">
                    تواصل معي الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
