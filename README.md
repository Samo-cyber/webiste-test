# Ahmed Salah — Philosophy & Psychology Tutor

This is a frontend-only Next.js blueprint for an academic tutoring platform. It is designed to be mobile-first, RTL (Arabic), and strictly follows the provided brand identity without using a logo.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

-   `app/`: Next.js App Router pages and layouts.
-   `components/`: Reusable UI components (Buttons, Cards, Headers).
-   `public/data/`: Static JSON files acting as a mock database.
-   `types.ts`: TypeScript definitions matching the planned DB schema.

## 🔌 Connecting to Supabase (Backend)

Currently, the app uses static data from `public/data`. To connect a real backend:

1.  **Create a Supabase Project**: Go to [supabase.com](https://supabase.com).
2.  **Database Setup**: Run the SQL for tables (`users`, `bookings`, `schedules`, `questions`) based on `types.ts` interfaces.
3.  **Environment Variables**:
    Create a `.env.local` file:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    ```
4.  **Replace Data Fetching**:
    In files like `app/schedules/page.tsx`, replace the `fs.readFile` logic with Supabase client calls:
    ```typescript
    import { createClient } from '@/utils/supabase/server';
    // ... inside component
    const supabase = createClient();
    const { data } = await supabase.from('schedules').select('*');
    ```

## 🚢 Deployment (Vercel)

1.  Push this repository to GitHub.
2.  Import the project in Vercel.
3.  Vercel will automatically detect Next.js.
4.  Click **Deploy**.
5.  (Later) Add the Supabase Environment variables in the Vercel Project Settings.

## 🎨 Design System
-   **Primary Color**: `#1A237E` (Deep Blue)
-   **Accent**: `#FFC400` (Amber/Gold)
-   **Font**: Cairo (Arabic), Poppins (English)
-   **NO LOGO**: Brand relies on typography.
