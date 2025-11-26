import React from 'react';
import { Button } from '@/components/Button';

// Static mock data to ensure client-side rendering without fs/Node.js
const schedules = [
  {
    "id": "s1",
    "class_id": "c1",
    "title": "مراجعة علم نفس (الباب الأول)",
    "start_at": "2023-11-20T14:00:00.000Z",
    "end_at": "2023-11-20T16:00:00.000Z",
    "capacity": 50,
    "remaining": 12,
    "location": "سنتر الأوائل"
  },
  {
    "id": "s2",
    "class_id": "c2",
    "title": "فلسفة ومنطق - حصة شرح",
    "start_at": "2023-11-21T18:00:00.000Z",
    "end_at": "2023-11-21T20:00:00.000Z",
    "capacity": 100,
    "remaining": 45,
    "location": "أونلاين (Zoom)"
  },
  {
    "id": "s3",
    "class_id": "c1",
    "title": "حل أسئلة شاملة",
    "start_at": "2023-11-22T15:00:00.000Z",
    "end_at": "2023-11-22T17:00:00.000Z",
    "capacity": 40,
    "remaining": 2,
    "location": "سنتر الهرم"
  }
];

export default function SchedulesPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-section">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-[28px] font-bold text-primary-1">جدول الحصص المتاح</h1>
          <p className="text-gray-500 mt-1">احجز مكانك في الحصص القادمة</p>
        </div>
        
        {/* Filter Bar Placeholder */}
        <div className="flex gap-2">
          <select className="h-[44px] bg-white border border-secondary-3 rounded-[10px] px-4 text-sm focus:outline-none">
            <option>كل المواد</option>
            <option>فلسفة</option>
            <option>علم نفس</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {schedules.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-card shadow-sm border border-secondary-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary-2/10 text-primary-2 text-xs font-bold px-2 py-1 rounded-md">
                  {item.location}
                </span>
                <span className="text-sm text-gray-500 font-english">
                  {new Date(item.start_at).toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' })}
                </span>
              </div>
              <h3 className="font-bold text-lg text-primary-1 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">
                من {new Date(item.start_at).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })} 
                {' '}إلى {new Date(item.end_at).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-400">المقاعد</p>
                <p className="font-bold text-primary-1">{item.remaining} / {item.capacity}</p>
              </div>
              <Button variant="primary" className="min-w-[120px]">حجز الآن</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}