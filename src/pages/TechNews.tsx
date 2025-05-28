
import { useState, useEffect } from "react";
import { ExternalLink, Clock, Globe, RefreshCw, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  category: string;
  image?: string;
  author?: string;
  language?: string;
}

interface NewsResponse {
  data: NewsItem[];
  pagination: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
}



const TechNews = () => {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [preferArabic, setPreferArabic] = useState<boolean>(() => {
    const saved = localStorage.getItem('preferArabicNews');
    return saved ? JSON.parse(saved) : true; // افتراضياً العربية
  });

  // دالة محدثة لجلب الأخبار حسب تفضيل اللغة
  const fetchNewsWithLanguage = async (): Promise<NewsResponse> => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      throw new Error('مفتاح API غير متوفر. يرجى التحقق من ملف .env');
    }

    const allArticles: any[] = [];

    try {
      if (preferArabic) {
        // جلب الأخبار العربية
        const arabCountries = ['sa', 'ae', 'eg', 'ma'];

        for (const country of arabCountries) {
          try {
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&category=technology&pageSize=10`
            );

            if (response.ok) {
              const data = await response.json();
              if (data.articles && Array.isArray(data.articles)) {
                allArticles.push(...data.articles);
              }
            }
          } catch (error) {
            console.warn(`فشل في جلب الأخبار من ${country}:`, error);
          }
        }
      }

      // إذا لم نحصل على أخبار عربية أو المستخدم يفضل الإنجليزية
      if (allArticles.length === 0 || !preferArabic) {
        if (preferArabic && allArticles.length === 0) {
          console.log('⚠️ لا توجد أخبار تقنية متاحة من الدول العربية حالياً، سيتم عرض الأخبار الدولية');
        }

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=technology&language=en&pageSize=20`
        );

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('مفتاح API غير صحيح أو منتهي الصلاحية');
          } else if (response.status === 429) {
            throw new Error('تم تجاوز حد الطلبات المسموح. يرجى المحاولة لاحقاً');
          } else {
            throw new Error(`خطأ في الخادم: ${response.status}`);
          }
        }

        const data = await response.json();
        console.log('استجابة الأخبار الإنجليزية:', data.totalResults, 'مقال');

        if (data.status === 'error') {
          throw new Error(data.message || 'خطأ من API');
        }

        if (data.articles && Array.isArray(data.articles)) {
          allArticles.push(...data.articles);
        }
      }

      // إضافة معلومة عن مصدر الأخبار
      const isArabicContent = preferArabic && allArticles.length > 0;
      console.log(`تم جلب ${allArticles.length} خبر من ${isArabicContent ? 'المصادر العربية' : 'المصادر الدولية'}`);


      // ترتيب الأخبار حسب التاريخ
      allArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      const limitedArticles = allArticles.slice(0, 20);

      return {
        data: limitedArticles.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          source: article.source?.name || 'مصدر غير معروف',
          published_at: article.publishedAt,
          category: 'technology',
          image: article.urlToImage,
          author: article.author
        })),
        pagination: {
          limit: 20,
          offset: 0,
          count: limitedArticles.length,
          total: limitedArticles.length
        }
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('خطأ في الاتصال بالشبكة');
    }
  };

  // استخدام React Query لجلب الأخبار
  const {
    data: newsResponse,
    isLoading,
    error,
    refetch,
    isRefetching
  } = useQuery({
    queryKey: ['techNews', preferArabic],
    queryFn: fetchNewsWithLanguage,
    staleTime: 12 * 60 * 60 * 1000, // 12 ساعة
    gcTime: 24 * 60 * 60 * 1000, // 24 ساعة (كان cacheTime في الإصدارات القديمة)
    refetchOnWindowFocus: false,
    retry: 3,
  });

  // حفظ تفضيل اللغة
  const handleLanguageChange = (arabic: boolean) => {
    setPreferArabic(arabic);
    localStorage.setItem('preferArabicNews', JSON.stringify(arabic));
  };

  // تحديث تلقائي كل 12 ساعة
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
      setLastUpdate(new Date());
    }, 12 * 60 * 60 * 1000); // 12 ساعة

    return () => clearInterval(interval);
  }, [refetch]);

  const handleManualRefresh = () => {
    refetch();
    setLastUpdate(new Date());
  };

  // استخدام البيانات من API فقط
  const news = newsResponse?.data || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "technology": "bg-blue-500/20 text-blue-400",
      "general": "bg-gray-500/20 text-gray-400",
      "business": "bg-green-500/20 text-green-400",
      "entertainment": "bg-purple-500/20 text-purple-400",
      "health": "bg-red-500/20 text-red-400",
      "science": "bg-cyan-500/20 text-cyan-400",
      "sports": "bg-orange-500/20 text-orange-400"
    };
    return colors[category?.toLowerCase()] || "bg-blue-500/20 text-blue-400";
  };

  const getNewsSource = (item: NewsItem) => {
    return item.source || "مصدر غير معروف";
  };

  const getNewsTitle = (item: NewsItem) => {
    return item.title || "عنوان غير متوفر";
  };

  const getNewsDescription = (item: NewsItem) => {
    return item.description || "وصف غير متوفر";
  };

  const getNewsDate = (item: NewsItem) => {
    return item.published_at || new Date().toISOString();
  };

  const getNewsCategory = (item: NewsItem) => {
    return item.category || "تقنية";
  };

  const translateCategory = (category: string) => {
    const translations: Record<string, string> = {
      "technology": "تقنية",
      "general": "عام",
      "business": "أعمال",
      "entertainment": "ترفيه",
      "health": "صحة",
      "science": "علوم",
      "sports": "رياضة"
    };
    return translations[category?.toLowerCase()] || category || "تقنية";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-amber-400">الأخبار</span> التقنية
              <span className="text-lg text-gray-400 block mt-2">
                {preferArabic ? "🇸🇦 🇦🇪 🇪🇬 🇲🇦" : "🌍"}
              </span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              آخر الأخبار والمقالات في عالم التكنولوجيا وتطوير البرمجيات
            </p>

            {/* Language Toggle and Refresh Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
                <Button
                  onClick={() => handleLanguageChange(true)}
                  variant={preferArabic ? "default" : "ghost"}
                  size="sm"
                  className={preferArabic
                    ? "bg-amber-500 text-black hover:bg-amber-600"
                    : "text-gray-400 hover:text-amber-400 hover:bg-amber-500/10"
                  }
                >
                  عربي
                </Button>
                <Button
                  onClick={() => handleLanguageChange(false)}
                  variant={!preferArabic ? "default" : "ghost"}
                  size="sm"
                  className={!preferArabic
                    ? "bg-amber-500 text-black hover:bg-amber-600"
                    : "text-gray-400 hover:text-amber-400 hover:bg-amber-500/10"
                  }
                >
                  English
                </Button>
              </div>

              {/* Refresh Button */}
              <Button
                onClick={handleManualRefresh}
                disabled={isRefetching}
                variant="outline"
                size="sm"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
              >
                <RefreshCw className={`w-4 h-4 ml-2 ${isRefetching ? 'animate-spin' : ''}`} />
                تحديث الأخبار
              </Button>

              <span className="text-sm text-gray-400">
                آخر تحديث: {formatDate(lastUpdate.toISOString())}
              </span>
            </div>

            {/* Language Info */}
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-400">
                {preferArabic
                  ? "عرض الأخبار من: السعودية، الإمارات، مصر، المغرب"
                  : "عرض الأخبار الدولية باللغة الإنجليزية"
                }
              </span>
              {preferArabic && news.length > 0 && news.every(article => !article.source?.includes('سعود') && !article.source?.includes('إمارات') && !article.source?.includes('مصر') && !article.source?.includes('مغرب')) && (
                <div className="mt-2">
                  <span className="text-xs text-amber-400">
                    ℹ️ لا توجد أخبار تقنية عربية متاحة حالياً، يتم عرض الأخبار الدولية
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-8">
              <Card className="bg-red-900/20 border-red-500/20 max-w-2xl mx-auto">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-red-400 mb-2">خطأ في تحميل الأخبار</h3>
                  <p className="text-gray-300 mb-4">
                    {error instanceof Error ? error.message : 'حدث خطأ غير متوقع'}
                  </p>
                  <p className="text-sm text-gray-400">
                    سيتم عرض الأخبار المحفوظة مؤقتاً
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="bg-gray-900/50 border-amber-500/20 animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-700 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-16">
              <Card className="bg-gray-900/30 border-amber-500/20 max-w-2xl mx-auto">
                <CardContent className="p-8 text-center">
                  <AlertCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">لا توجد أخبار متاحة</h3>
                  <p className="text-gray-300 mb-6">
                    {error ? 'حدث خطأ في تحميل الأخبار. يرجى التحقق من اتصال الإنترنت أو مفتاح API.' : 'لم يتم العثور على أخبار في الوقت الحالي.'}
                  </p>
                  <Button
                    onClick={handleManualRefresh}
                    disabled={isRefetching}
                    className="bg-amber-500 hover:bg-amber-600 text-black"
                  >
                    <RefreshCw className={`w-4 h-4 ml-2 ${isRefetching ? 'animate-spin' : ''}`} />
                    إعادة المحاولة
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article: NewsItem, index: number) => (
                <Card key={index} className="bg-gray-900/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(getNewsCategory(article))}`}>
                        {translateCategory(getNewsCategory(article))}
                      </span>
                      <div className="flex items-center text-xs text-gray-400">
                        <Globe className="w-3 h-3 ml-1" />
                        {getNewsSource(article)}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-amber-400 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {getNewsTitle(article)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {article.image && (
                      <img
                        src={article.image}
                        alt={getNewsTitle(article)}
                        className="w-full h-32 object-cover rounded-md mb-4"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {getNewsDescription(article)}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="w-3 h-3 ml-1" />
                        {formatDate(getNewsDate(article))}
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-300"
                        asChild
                      >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 ml-1" />
                          اقرأ المزيد
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* News Stats - Only show if we have news */}
          {news.length > 0 && (
            <div className="mt-16">
              <Card className="bg-gray-900/30 border-amber-500/20 max-w-2xl mx-auto">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-amber-400 mb-4">إحصائيات الأخبار</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-white">{news.length}</div>
                      <div className="text-sm text-gray-400">مقال محمل</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {newsResponse?.pagination?.total || 'غير محدد'}
                      </div>
                      <div className="text-sm text-gray-400">إجمالي الأخبار</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {error ? '❌' : '✅'}
                      </div>
                      <div className="text-sm text-gray-400">حالة API</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    الأخبار يتم تحديثها تلقائياً كل 12 ساعة من NewsAPI
                    {preferArabic ? " (مصادر عربية)" : " (مصادر دولية)"}
                  </p>
                  <div className="text-sm text-gray-400">
                    * يتم حفظ الأخبار مؤقتاً لتحسين سرعة التحميل
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TechNews;
