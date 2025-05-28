const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

// إنشاء ملف PDF ثابت للسيرة الذاتية
function generateStaticCV() {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // إعدادات الألوان
    const primaryColor = [245, 158, 11]; // amber
    const secondaryColor = [75, 85, 99]; // gray
    const textColor = [31, 41, 55]; // dark gray

    // إعدادات الخط
    doc.setFont("helvetica");

    // Header Section
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, 'F');

    // الاسم
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('حذيفه عبدالمعز عبدالرحمان محمد حاتم الحذيفي', 105, 20, { align: 'center' });

    // المسمى الوظيفي
    doc.setFontSize(14);
    doc.text('مهندس تقنية معلومات', 105, 30, { align: 'center' });

    // معلومات التواصل
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    let yPos = 50;

    // البريد الإلكتروني
    doc.text('البريد الإلكتروني:', 20, yPos);
    doc.text('hodifaabdhalmoaz@gmail.com', 60, yPos);
    yPos += 6;

    // الهاتف
    doc.text('الهاتف:', 20, yPos);
    doc.text('+967 777548421 / +967 718706242', 60, yPos);
    yPos += 6;

    // الموقع
    doc.text('الموقع:', 20, yPos);
    doc.text('عدن، اليمن', 60, yPos);
    yPos += 15;

    // الملخص الشخصي
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('الملخص الشخصي', 20, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    const summary = 'طالب تقنية المعلومات في السنة الرابعة في كلية الهندسة جامعة عدن، لدي خبرة متواضعة في بعض لغات البرمجة وتطوير التطبيقات والمواقع الإلكترونية.';
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, yPos);
    yPos += summaryLines.length * 5 + 10;

    // التعليم
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('التعليم', 20, yPos);
    yPos += 8;

    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.text('بكالوريوس تقنية المعلومات', 20, yPos);
    yPos += 6;

    doc.setFontSize(10);
    doc.setTextColor(...secondaryColor);
    doc.text('جامعة عدن - كلية الهندسة | السنة الرابعة', 20, yPos);
    yPos += 15;

    // الخبرة العملية
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('الخبرة العملية', 20, yPos);
    yPos += 8;

    const experiences = [
      {
        title: 'شريك في معهد تقني',
        description: 'تحليل قواعد البيانات لمدرسة في إحدى القرى اليمنية'
      },
      {
        title: 'العمل في التجارة الحرة',
        description: 'إدارة الأعمال التجارية والمشاريع الصغيرة'
      }
    ];

    experiences.forEach(exp => {
      doc.setFontSize(12);
      doc.setTextColor(...textColor);
      doc.text(exp.title, 20, yPos);
      yPos += 6;

      doc.setFontSize(10);
      doc.setTextColor(...secondaryColor);
      const descLines = doc.splitTextToSize(exp.description, 170);
      doc.text(descLines, 20, yPos);
      yPos += descLines.length * 5 + 8;
    });

    // المشاريع
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('المشاريع', 20, yPos);
    yPos += 8;

    const projects = [
      'برنامج إدارة الحجز - تطبيق سطح مكتب',
      'متجر إلكتروني بـ Laravel 11',
      'تصميم قواعد البيانات للمدارس والفنادق'
    ];

    projects.forEach(project => {
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      doc.text(`• ${project}`, 20, yPos);
      yPos += 6;
    });

    yPos += 10;

    // المهارات
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('المهارات التقنية', 20, yPos);
    yPos += 8;

    const skills = [
      'C++, C#, HTML, CSS, JavaScript',
      'PHP, SQL, Laravel',
      'تصميم قواعد البيانات',
      'UX/UI Design (Figma)',
      'Microsoft Office'
    ];

    skills.forEach(skill => {
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      doc.text(`• ${skill}`, 20, yPos);
      yPos += 6;
    });

    yPos += 10;

    // اللغات
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text('اللغات', 20, yPos);
    yPos += 8;

    const languages = [
      'العربية: الأم',
      'الإنجليزية: ممتاز',
      'الفرنسية: متوسط'
    ];

    languages.forEach(lang => {
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      doc.text(`• ${lang}`, 20, yPos);
      yPos += 6;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(...secondaryColor);
    const currentDate = new Date().toLocaleDateString('ar-EG');
    doc.text(`تم إنشاء هذه السيرة الذاتية في: ${currentDate}`, 105, 285, { align: 'center' });

    // حفظ الملف
    const outputPath = path.join(__dirname, '../public/cv/hodifa-cv.pdf');
    
    // التأكد من وجود المجلد
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // حفظ الملف
    const pdfBuffer = doc.output('arraybuffer');
    fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));

    console.log('✅ تم إنشاء ملف PDF بنجاح:', outputPath);
    return true;

  } catch (error) {
    console.error('❌ خطأ في إنشاء ملف PDF:', error);
    return false;
  }
}

// تشغيل الدالة إذا تم استدعاء الملف مباشرة
if (require.main === module) {
  generateStaticCV();
}

module.exports = { generateStaticCV };
