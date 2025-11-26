import React from 'react';
import { Button } from '@/components/Button';

// Mock data for bookings
const mockBookings = [
  { id: '1', title: 'مراجعة الباب الأول فلسفة', date: '2023-11-15T14:00:00', status: 'confirmed', location: 'سنتر الأوائل' },
  { id: '2', title: 'علم نفس - حصة عادية', date: '2023-11-20T16:00:00', status: 'pending', location: 'أونلاين' },
  { id: '3', title: 'علم اجتماع', date: '2023-11-10T14:00:00', status: 'cancelled', location: 'سنتر الأوائل' },
];

export default function MyBookingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-section">
      <h1 className="text-[28px] font-bold text-primary-1 mb-8">حجوزاتي</h1>

      <div className="space-y-6">
        {mockBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-card shadow-card p-6 relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              booking.status === 'confirmed' ? 'bg-green-500' : 
              booking.status === 'cancelled' ? 'bg-red-400' : 'bg-accent'
            }`}></div>
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-primary-1">{booking.title}</h3>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status === 'confirmed' ? 'مؤكد' : booking.status === 'cancelled' ? 'ملغي' : 'قيد الانتظار'}
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-4">
                   <span>📅 {new Date(booking.date).toLocaleDateString('ar-EG')}</span>
                   <span>📍 {booking.location}</span>
                </div>
              </div>

              {booking.status !== 'cancelled' && (
                <Button variant="ghost" className="text-red-500 border-red-200 hover:bg-red-50">
                  إلغاء الحجز
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}