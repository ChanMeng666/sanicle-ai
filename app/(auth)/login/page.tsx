"use client";

import { BrandSection } from './components/BrandSection';
import { LoginForm } from './components/LoginForm';

/**
 * Login page component
 * Combines brand section and login form
 */
export default function LoginPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] w-full">
        {/* Brand section with features */}
        <BrandSection />

        {/* Login form section */}
        <LoginForm />
      </div>

      {/* Developer brand credit — Chan Meng */}
      <footer className="w-full border-t border-gray-200 py-5 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-gray-500">
          <a
            href="https://github.com/ChanMeng666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-gray-700 transition-colors"
          >
            <img src="/brand/chan-meng-monkey.svg" alt="Chan Meng" className="h-5 w-5" />
            <span className="font-medium">Built by Chan Meng</span>
          </a>
          <span className="hidden sm:inline text-gray-300">·</span>
          <span>
            Need a custom app like this one?{" "}
            <a href="mailto:chanmeng.dev@gmail.com" className="hover:text-pink-600 transition-colors">
              chanmeng.dev@gmail.com
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
