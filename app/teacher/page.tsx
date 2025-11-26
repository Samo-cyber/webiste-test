import React from 'react';
import { Button } from '@/components/Button';
import { PlaceholderCard } from '@/components/SVGPlaceholders';

export default function TeacherDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-section">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-[32px] font-bold text-primary-1">لوحة تحكم المعلم</h1>
        <Button variant="secondary">+ حصة جديدة</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Stats & Actions */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Today's Classes */}
          <section>
            <h2 className="text-[22px] font-bold text-primary-1 mb-4">حصص اليوم</h2>
            <div className="bg-white rounded-card shadow-card p-6">
              <div className="flex items-center justify-between border-b border-secondary-2 pb-4 mb-4">
                <div>
                  <h3 className="font-bold text-lg">مراجعة فلسفة - مجموعة أ</h3>
                  <p className="text-sm text-gray-500">2:00 م — سنتر الأوائل</p>
                </div>
                <div className="text-center bg-secondary-2 px-4 py-2 rounded-lg">
                  <span className="block font-bold text-primary-1 text-xl">45</span>
                  <span className="text-xs text-gray-500">حضور</span>
                </div>
              </div>
              <Button fullWidth variant="ghost">عرض قائمة الحضور</Button>
            </div>
          </section>

          {/* Unanswered Questions */}
          <section>
            <h2 className="text-[22px] font-bold text-primary-1 mb-4">أسئلة تحتاج لرد</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-card p-5 border-r-4 border-accent shadow-sm">
                  <p className="text-sm text-gray-600 mb-3">يا مستر لو سمحت شرح الحتمية الجينية تاني؟</p>
                  <div className="flex justify-end">
                    <Button variant="primary" className="text-sm py-2 h-auto">رد الآن</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Quick Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-primary-1 text-white rounded-card p-6 shadow-lg">
             <h3 className="text-lg font-bold mb-2">إجمالي الطلاب</h3>
             <p className="text-4xl font-bold text-accent">1,240</p>
          </div>
          
          <div className="bg-white rounded-card p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4 text-primary-1">الجدول الأسبوعي</h3>
            <div className="space-y-2 text-sm">
               <div className="flex justify-between p-2 bg-secondary-2 rounded">
                 <span>السبت</span>
                 <span className="font-bold">3 حصص</span>
               </div>
               <div className="flex justify-between p-2 rounded">
                 <span>الأحد</span>
                 <span className="font-bold">--</span>
               </div>
               <div className="flex justify-between p-2 bg-secondary-2 rounded">
                 <span>الأثنين</span>
                 <span className="font-bold">2 حصة</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}