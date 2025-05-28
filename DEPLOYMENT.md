# دليل النشر على GitHub Pages

## الخطوات المطلوبة للنشر

### 1. إعداد Repository على GitHub

```bash
# إنشاء repository جديد على GitHub باسم: hodifa-tech-profile
# ثم ربط المشروع المحلي بـ GitHub

git init
git add .
git commit -m "Initial commit: Portfolio website ready for deployment"
git branch -M main
git remote add origin https://github.com/[username]/hodifa-tech-profile.git
git push -u origin main
```

### 2. تفعيل GitHub Pages

1. اذهب إلى إعدادات Repository على GitHub
2. انتقل إلى قسم "Pages" في الشريط الجانبي
3. في "Source"، اختر "GitHub Actions"
4. احفظ الإعدادات

### 3. النشر التلقائي

بمجرد push الكود إلى main branch، سيتم:
- تشغيل GitHub Actions تلقائياً
- بناء المشروع
- نشره على GitHub Pages
- الموقع سيكون متاح على: `https://[username].github.io/hodifa-tech-profile/`

### 4. النشر اليدوي (اختياري)

```bash
# إذا كنت تريد النشر يدوياً
npm run deploy
```

### 5. تحديث الموقع

```bash
# لتحديث الموقع، ما عليك سوى:
git add .
git commit -m "Update website content"
git push origin main

# سيتم النشر تلقائياً خلال دقائق قليلة
```

## إعدادات مهمة

### متغيرات البيئة

إذا كنت تستخدم API keys، تأكد من إضافتها في:
- GitHub Repository Settings > Secrets and variables > Actions
- أضف `VITE_NEWS_API_KEY` مع قيمة المفتاح

### الدومين المخصص

إذا كان لديك دومين مخصص:
1. عدّل ملف `public/CNAME` وضع اسم الدومين
2. في إعدادات GitHub Pages، أضف الدومين المخصص
3. تأكد من إعداد DNS records بشكل صحيح

### استكشاف الأخطاء

- تحقق من تبويب "Actions" في GitHub لمراقبة عملية البناء
- تأكد من أن جميع الملفات تم رفعها بشكل صحيح
- تحقق من أن `base` في vite.config.ts يطابق اسم Repository

## الملفات المهمة للنشر

- `.github/workflows/deploy.yml` - إعدادات GitHub Actions
- `vite.config.ts` - إعدادات البناء مع base path
- `package.json` - السكريبتات والتبعيات
- `public/.nojekyll` - لتجنب مشاكل Jekyll
- `public/CNAME` - للدومين المخصص (اختياري)

## نصائح مهمة

1. **تأكد من أن Repository عام** (public) لاستخدام GitHub Pages مجاناً
2. **لا تضع API keys في الكود** - استخدم GitHub Secrets
3. **اختبر الموقع محلياً** قبل النشر باستخدام `npm run build && npm run preview`
4. **راقب استخدام GitHub Actions** - لديك حد شهري مجاني
