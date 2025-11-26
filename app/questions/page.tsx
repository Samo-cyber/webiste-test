import React from 'react';
import { Button } from '@/components/Button';

// Static mock data
const questions = [
  {
    "id": "q1",
    "user_id": "u2",
    "user_name": "محمد أحمد",
    "class_id": "c1",
    "content": "هل الاستنباط الرياضي يعتمد على التجربة الحسية؟",
    "status": "answered",
    "created_at": "2023-11-01T10:00:00Z",
    "answers": [
      {
        "id": "a1",
        "question_id": "q1",
        "teacher_id": "t1",
        "content": "لا يا محمد، الاستنباط الرياضي عملية عقلية خالصة لا تعتمد على التجربة المادية في العالم الخارجي.",
        "created_at": "2023-11-01T12:00:00Z"
      }
    ]
  },
  {
    "id": "q2",
    "user_id": "u3",
    "user_name": "سارة علي",
    "class_id": "c2",
    "content": "ممكن توضيح الفرق بين القلق الموضوعي والقلق المرضي؟",
    "status": "open",
    "created_at": "2023-11-02T09:30:00Z",
    "answers": []
  }
];

export default function QuestionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-section">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[28px] font-bold text-primary-1">الأسئلة والاستفسارات</h1>
        <Button variant="primary">اسأل المعلم</Button>
      </div>

      <div className="space-y-6">
        {questions.map((q) => (
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