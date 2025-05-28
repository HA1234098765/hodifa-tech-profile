import { useState } from 'react';
import { Download, FileText, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface PDFDownloadProps {
  variant?: 'button' | 'card';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PDFDownload = ({ variant = 'button', size = 'md', className = '' }: PDFDownloadProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // بيانات السيرة الذاتية
  const cvData = {
    name: 'حذيفه عبدالمعز عبدالرحمان محمد حاتم الحذيفي',
    title: 'مهندس تقنية معلومات',
    email: 'hodifaabdhalmoaz@gmail.com',
    phone: '+967 777548421 / +967 718706242',
    location: 'عدن، اليمن',
    summary: 'مهندس تقنية معلومات متخصص في تطوير تطبيقات الويب والهواتف الذكية مع خبرة في React، Node.js، وقواعد البيانات.',
    education: [
      {
        degree: 'بكالوريوس هندسة تقنية المعلومات',
        institution: 'جامعة عدن - كلية الهندسة',
        year: '2019-2023',
        gpa: 'تقدير جيد جداً'
      }
    ],
    experience: [
      {
        position: 'مطور ويب متقدم',
        company: 'شركة التقنيات المتطورة',
        period: '2023 - حتى الآن',
        description: 'تطوير تطبيقات ويب متقدمة باستخدام React و Node.js'
      },
      {
        position: 'مطور تطبيقات',
        company: 'مؤسسة الحلول الرقمية',
        period: '2022 - 2023',
        description: 'تطوير تطبيقات الهواتف الذكية والمواقع الإلكترونية'
      }
    ],
    skills: [
      'React.js & Next.js',
      'Node.js & Express',
      'TypeScript & JavaScript',
      'Python & Django',
      'MySQL & MongoDB',
      'Git & GitHub',
      'Docker & AWS',
      'UI/UX Design'
    ],
    languages: [
      { name: 'العربية', level: 'الأم' },
      { name: 'الإنجليزية', level: 'ممتاز' },
      { name: 'الفرنسية', level: 'متوسط' }
    ]
  };

  const generateAdvancedPDF = async () => {
    setIsGenerating(true);
    setDownloadStatus('idle');

    try {
      // إنشاء HTML للسيرة الذاتية مع دعم كامل للعربية
      const htmlContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>السيرة الذاتية - ${cvData.name}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap');

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: 'Noto Sans Arabic', Arial, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              background: white;
              direction: rtl;
              text-align: right;
            }

            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }

            .header {
              background: linear-gradient(135deg, #f59e0b, #d97706);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px;
              margin-bottom: 30px;
            }

            .header h1 {
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 10px;
            }

            .header h2 {
              font-size: 18px;
              font-weight: 400;
              opacity: 0.9;
            }

            .contact-info {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 15px;
              margin-bottom: 30px;
              padding: 20px;
              background: #f9fafb;
              border-radius: 8px;
            }

            .contact-item {
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .contact-item strong {
              color: #f59e0b;
              min-width: 80px;
            }

            .section {
              margin-bottom: 30px;
            }

            .section-title {
              font-size: 20px;
              font-weight: 600;
              color: #f59e0b;
              border-bottom: 2px solid #f59e0b;
              padding-bottom: 8px;
              margin-bottom: 20px;
            }

            .education-item, .experience-item {
              margin-bottom: 20px;
              padding: 15px;
              background: #f9fafb;
              border-radius: 8px;
              border-right: 4px solid #f59e0b;
            }

            .item-title {
              font-size: 16px;
              font-weight: 600;
              color: #1f2937;
              margin-bottom: 5px;
            }

            .item-subtitle {
              font-size: 14px;
              color: #6b7280;
              margin-bottom: 8px;
            }

            .item-description {
              font-size: 14px;
              color: #4b5563;
              line-height: 1.5;
            }

            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 10px;
            }

            .skill-item {
              background: #f59e0b;
              color: white;
              padding: 8px 15px;
              border-radius: 20px;
              text-align: center;
              font-size: 14px;
              font-weight: 500;
            }

            .languages-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 15px;
            }

            .language-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 15px;
              background: #f9fafb;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            }

            .language-name {
              font-weight: 500;
            }

            .language-level {
              color: #f59e0b;
              font-weight: 600;
            }

            .footer {
              text-align: center;
              margin-top: 40px;
              padding: 20px;
              background: #f3f4f6;
              border-radius: 8px;
              font-size: 12px;
              color: #6b7280;
            }

            @media print {
              body { margin: 0; }
              .container { max-width: none; margin: 0; padding: 15px; }
              .header { margin-bottom: 20px; }
              .section { margin-bottom: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${cvData.name}</h1>
              <h2>${cvData.title}</h2>
            </div>

            <div class="contact-info">
              <div class="contact-item">
                <strong>البريد:</strong>
                <span>${cvData.email}</span>
              </div>
              <div class="contact-item">
                <strong>الهاتف:</strong>
                <span>${cvData.phone}</span>
              </div>
              <div class="contact-item">
                <strong>الموقع:</strong>
                <span>${cvData.location}</span>
              </div>
            </div>

            <div class="section">
              <h3 class="section-title">الملخص المهني</h3>
              <p class="item-description">${cvData.summary}</p>
            </div>

            <div class="section">
              <h3 class="section-title">التعليم</h3>
              ${cvData.education.map(edu => `
                <div class="education-item">
                  <div class="item-title">${edu.degree}</div>
                  <div class="item-subtitle">${edu.institution} | ${edu.year}</div>
                  <div class="item-description">${edu.gpa}</div>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h3 class="section-title">الخبرة العملية</h3>
              ${cvData.experience.map(exp => `
                <div class="experience-item">
                  <div class="item-title">${exp.position}</div>
                  <div class="item-subtitle">${exp.company} | ${exp.period}</div>
                  <div class="item-description">${exp.description}</div>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h3 class="section-title">المهارات التقنية</h3>
              <div class="skills-grid">
                ${cvData.skills.map(skill => `
                  <div class="skill-item">${skill}</div>
                `).join('')}
              </div>
            </div>

            <div class="section">
              <h3 class="section-title">اللغات</h3>
              <div class="languages-list">
                ${cvData.languages.map(lang => `
                  <div class="language-item">
                    <span class="language-name">${lang.name}</span>
                    <span class="language-level">${lang.level}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="footer">
              تم إنشاء هذه السيرة الذاتية في: ${new Date().toLocaleDateString('ar-EG')}
            </div>
          </div>
        </body>
        </html>
      `;

      // فتح نافذة جديدة للطباعة
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        throw new Error('تم حظر النوافذ المنبثقة. يرجى السماح بالنوافذ المنبثقة وإعادة المحاولة.');
      }

      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // انتظار تحميل المحتوى ثم الطباعة
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      };

      setDownloadStatus('success');
      toast({
        title: "تم فتح نافذة الطباعة",
        description: "يمكنك الآن حفظ السيرة الذاتية كملف PDF من خيارات الطباعة",
      });

    } catch (error) {
      console.error('خطأ في إنشاء PDF:', error);
      setDownloadStatus('error');
      toast({
        title: "خطأ في تحميل السيرة الذاتية",
        description: error instanceof Error ? error.message : "حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'sm': return 'px-4 py-2 text-sm';
      case 'lg': return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3';
    }
  };

  const getIcon = () => {
    if (isGenerating) return <Loader2 className="w-4 h-4 ml-2 animate-spin" />;
    if (downloadStatus === 'success') return <CheckCircle className="w-4 h-4 ml-2 text-green-500" />;
    if (downloadStatus === 'error') return <AlertCircle className="w-4 h-4 ml-2 text-red-500" />;
    return <Download className="w-4 h-4 ml-2" />;
  };

  if (variant === 'card') {
    return (
      <Card className={`bg-gray-900/50 border-amber-500/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-amber-400 ml-3" />
              <div>
                <h3 className="text-lg font-semibold text-white">السيرة الذاتية</h3>
                <p className="text-sm text-gray-400">تحميل بصيغة PDF</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={generateAdvancedPDF}
              disabled={isGenerating}
              className={`w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold ${getButtonSize()}`}
            >
              {getIcon()}
              {isGenerating ? 'جاري الإنشاء...' : 'تحميل السيرة الذاتية (PDF)'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Button
      onClick={generateAdvancedPDF}
      disabled={isGenerating}
      className={`bg-amber-500 hover:bg-amber-600 text-black font-semibold transition-all duration-300 ${getButtonSize()} ${className}`}
    >
      {getIcon()}
      {isGenerating ? 'جاري الإنشاء...' : 'تحميل السيرة الذاتية (PDF)'}
    </Button>
  );
};

export default PDFDownload;
