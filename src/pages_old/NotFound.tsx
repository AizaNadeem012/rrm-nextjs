'use client';

import { useEffect } from "react";

const NotFound = () => {
  // In Next.js App Router, we can't use useLocation from react-router-dom
  // Instead we can use window.location for client-side access if needed
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", currentPath);
  }, [currentPath]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
