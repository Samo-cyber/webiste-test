import React from 'react';
import { Button } from '@/components/Button';

export default function AuthPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-card shadow-card p-8 md:p-10">
        <h1 className="text-[28px] font-bold text-primary-1 mb-2 text-center">تسجيل الدخول</h1>
        <p className="text-center text-gray-500 mb-8">أدخل بريدك الإلكتروني أو رقم هاتفك للمتابعة</p>

        <form className="space-y-6" action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-1 mb-2">البريد الإلكتروني</label>
            <input 
              type="email" 
              id="email" 
              placeholder="name@example.com"
              className="w-full h-[48px] px-[14px] rounded-[10px] border border-secondary-3 focus:outline-none focus:border-primary-2 focus:ring-1 focus:ring-primary-2 transition-all"
            />
          </div>

          <Button fullWidth>إرسال رابط الدخول (Magic Link)</Button>
        </form>

        <div className="mt-8 pt-8 border-t border-secondary-2 text-center">
          <p className="text-sm text-gray-500 mb-4">أو</p>
          <Button variant="ghost" fullWidth>تسجيل الدخول برقم الهاتف</Button>
        </div>
      </div>
    </div>
  );
}