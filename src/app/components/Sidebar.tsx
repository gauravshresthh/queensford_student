'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-600' : 'hover:bg-blue-700';
  };

  return (
    <div className="flex">
      {/* Breadcrumb Button for Mobile and Tablet */}
      <button
        className="lg:hidden p-4 text-white bg-primary rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰ {/* Hamburger Icon or Text */}
      </button>

      {/* Sidebar */}
      <aside
        className={`lg:flex ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block fixed lg:static inset-0 bg-primary text-white p-5 flex-col items-center`}
      >
        {/* Close Button for Mobile and Tablet */}
        <button
          className="lg:hidden absolute top-5 right-5 text-white"
          onClick={() => setIsSidebarOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-2xl font-bold mb-8 bg-white rounded-full w-24 h-24 flex justify-center items-center">
          <Image
            src="https://queensford.edu.au/wp-content/uploads/2020/05/cropped-new-logo.png"
            alt="Logo"
            width={100}
            height={100}
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <nav className="space-y-4 w-full">
          <Link href="/" className={`block py-2 px-4 rounded ${isActive('/')}`}>
            Dashboard
          </Link>
          <Link
            href="/profile"
            className={`block py-2 px-4 rounded ${isActive('/profile')}`}
          >
            Profile
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-grow p-5">
        {/* The content of the page will be here */}
        <h1>Your Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
