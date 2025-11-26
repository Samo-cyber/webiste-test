import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import Schedules from './app/schedules/page';
import Questions from './app/questions/page';
import MyBookings from './app/my-bookings/page';
import Auth from './app/auth/page';
import Teacher from './app/teacher/page';
import RootLayout from './app/layout';

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    
    // Monkey patch pushState to detect route changes from Link components
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
       originalPushState.apply(this, args);
       setPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener('popstate', onPopState);
      window.history.pushState = originalPushState;
    };
  }, []);

  // Simple router mapping
  let Component = Home;
  if (path === '/schedules') Component = Schedules;
  if (path === '/questions') Component = Questions;
  if (path === '/my-bookings') Component = MyBookings;
  if (path === '/auth') Component = Auth;
  if (path === '/teacher') Component = Teacher;

  return (
    <RootLayout>
      <Component />
    </RootLayout>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
