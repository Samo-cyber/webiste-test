import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { PlaceholderHero, PlaceholderCard } from '@/components/SVGPlaceholders';

async function getData() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  // In a real app, fetch from Supabase here
  return {
    classes: [
      { id: '1', title: 'علم النفس - الصف الثالث', description: 'مراجعة شاملة للباب الأول' },
      { id: '2', title: 'فلسفة - الصف الثاني', description: 'أساسيات المنطق الحديث' },
      { id: '3', title: 'علم الاجتماع', description: 'النظريات الاجتماعية المعاصرة' },
    ]
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[600px] bg-primary-1 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <PlaceholderHero />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-1/90 to-transparent z-10" />
        
        <div className="relative z-20 flex flex-col justify-end h-full p-padding max-w-6xl mx-auto pb-20">
          <h1 className="font-title text-[28px] md:text-[36px] font-bold leading-[1.15] mb-4">
            أحمد صلاح — مدرس الفلسفة وعلم النفس
          </h1>
          <p className="font-english text-secondary-3 text-[16px] mb-8 max-w-lg">
            Ahmed Salah — Philosophy & Psychology Tutor
          </p>
          
          <div className="flex gap-4">
            <Link href="/schedules">
              <Button variant="primary">احجز حصتك الآن</Button>
            </Link>
            <Link href="/schedules">
              <Button variant="ghost" className="text-secondary-1 border-secondary-1">
                جدول المواعيد
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="px-5 md:px-margins py-section bg-secondary-1">
        <h2 className="text-[28px] font-bold text-primary-1 mb-6 text-center">المواد الدراسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-7xl mx-auto">
          {data.classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-card shadow-card overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-full aspect-video bg-secondary-2">
                <PlaceholderCard />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-bold text-primary-1 mb-2">{cls.title}</h3>
                <p className="text-gray-600 mb-6 font-medium">{cls.description}</p>
                <Link href={`/class/${cls.id}`} className="block">
                  <Button variant="secondary" fullWidth>التفاصيل</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 md:px-margins py-section bg-secondary-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] font-bold text-primary-1 mb-10">كيف تبدأ؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent text-xl font-bold mb-4 shadow-sm">1</div>
              <h3 className="font-bold text-primary-2 mb-2">سجل حساب</h3>
              <p className="text-sm text-gray-600">أنشئ حسابك برقم الهاتف في ثوانٍ</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent text-xl font-bold mb-4 shadow-sm">2</div>
              <h3 className="font-bold text-primary-2 mb-2">اختر الموعد</h3>
              <p className="text-sm text-gray-600">استعرض الجدول واختر الحصة المناسبة</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent text-xl font-bold mb-4 shadow-sm">3</div>
              <h3 className="font-bold text-primary-2 mb-2">احضر الحصة</h3>
              <p className="text-sm text-gray-600">تابع دروسك واسأل معلمك مباشرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticated User Previews (Mocked Visuals) */}
      <section className="px-5 md:px-margins py-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] font-bold text-primary-1 mb-6">حجوزاتي القادمة</h2>
          <div className="bg-white border border-secondary-3 rounded-card p-6 flex items-center justify-between shadow-sm">
            <div>
              <p className="font-bold text-primary-1">مراجعة علم نفس - سنتر الأوائل</p>
              <p className="text-sm text-gray-500 mt-1">الجمعة، 25 أكتوبر - 2:00 م</p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">مؤكد</span>
          </div>
        </div>
      </section>
    </div>
  );
}