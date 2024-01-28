import Link from "next/link";
import React, { ReactNode, useState } from "react";

interface LayoutContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="shadow">
        <div className="p-4 flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            {/* Arrow button to toggle sidebar */}
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-800"
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            <img src="/logo.svg" alt="My App Logo" width={50} height={50} />
            <Link href={"/"}>
              <h2 className="text-2xl font-semibold text-primary">Home</h2>
            </Link>
          </div>
          <div className="hidden md:flex space-x-2">
            <img src="/birthday.svg" alt="My App Logo" width={24} height={24} />
            <a href="/birthday" className="text-gray-600 hover:text-gray-800">
              Birthday
            </a>
            <img src="/notes.svg" alt="My App Logo" width={24} height={24} />
            <a href="/notes" className="text-gray-600 hover:text-gray-800">
              Notes
            </a>
            <img src="/chart.svg" alt="My App Logo" width={24} height={24} />
            <a href="/graphs" className="text-gray-600 hover:text-gray-800">
              Statistics
            </a>
            <img src="/quiz.svg" alt="My App Logo" width={24} height={24} />
            <a href="/quiz" className="text-gray-600 hover:text-gray-800">
              Quiz
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-x-hidden">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="bg-gray-200 text-primary w-64 flex-shrink-0">
            {/* Sidebar Content */}
            <nav className="p-2">
              <ul>
                {/* <li className="p-2 hover:bg-gray-600">
                <a href="#" className="block">Home</a>
              </li> */}
                <li className="p-2 hover:bg-gray-600">
                  <div className="flex flex-row space-x-2">
                    <a href="/stories" className="block">
                      Stories
                    </a>
                  </div>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <div className="flex flex-row space-x-2">
                   
                    <a href="/album" className="block">
                      Album
                    </a>
                  </div>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <div className="flex flex-row space-x-2">
                   
                    <a href="/landing-page" className="block">
                      Landing-page
                    </a>
                  </div>
                </li>
                {/* Add more items as needed */}
              </ul>
            </nav>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
          {/* Page Content */}
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
