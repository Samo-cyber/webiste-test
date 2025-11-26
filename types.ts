export type Role = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: Role;
  created_at: string;
}

export interface Class {
  id: string;
  title: string;
  description: string;
  teacher_id: string;
}

export interface Schedule {
  id: string;
  class_id: string;
  start_at: string;
  end_at: string;
  capacity: number;
  location: string;
  class?: Class; // Joined data for UI
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Booking {
  id: string;
  user_id: string;
  schedule_id: string;
  status: BookingStatus;
  schedule?: Schedule; // Joined data
}

export type QuestionStatus = 'open' | 'answered';

export interface Answer {
  id: string;
  question_id: string;
  teacher_id: string;
  content: string;
  created_at: string;
}

export interface Question {
  id: string;
  user_id: string;
  user_name: string; // Joined for display
  class_id: string;
  content: string;
  status: QuestionStatus;
  created_at: string;
  answers?: Answer[];
}