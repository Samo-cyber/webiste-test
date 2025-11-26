import React from 'react';
import { Button } from '@/components/Button';
import { promises as fs } from 'fs';
import path from 'path';

async function getQuestions() {
  const filePath = path.join((process as any).cwd(), 'public/data/questions.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function QuestionsPage() {
  const questions = await getQuestions();

  return (
    <div className="max-w-4xl mx-auto px-5 py-section">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[28px] font-bold text-primary-1">الأسئلة والاستفسارات</h1>
        <Button variant="primary">اسأل المعلم</Button>
      </div>

      <div className="space-y-6">
        {questions.map((q: any) => (
          <div key={q.id} className="bg-white rounded-card p-6 shadow-sm border border-secondary-2">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary-3 flex items-center justify-center text-primary-1 font-bold text-xs">
                  {q.user_name.charAt(0)}
                </div>
                <span className="font-bold text-sm text-primary-1">{q.user_name}</span>
              </div>
              <span className="text-xs text-gray-400 font-english">
                {new Date(q.created_at).toLocaleDateString('ar-EG')}
              </span>
            </div>
            
            <p className="text-gray-800 mb-4 font-medium leading-relaxed">{q.content}</p>

            {q.answers && q.answers.length > 0 ? (
              <div className="bg-secondary-2 rounded-lg p-4 mr-4 border-r-2 border-accent">
                <p className="text-xs text-primary-2 font-bold mb-1">رد المعلم أحمد صلاح</p>
                <p className="text-sm text-gray-700">{q.answers[0].content}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                بانتظار الرد
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}