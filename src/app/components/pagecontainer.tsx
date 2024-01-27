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
                    <svg
                      fill="#000000"
                      height="25px"
                      width="25px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 488.1 488.1"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M299.9,86.8c14.2-6.3,30.3-9.8,46.2-9.8c9.2,0,18,1.1,26.3,3.2c3.3,0.8,6.5-2,6-5.4l-1.2-9.6l0,0 c-1-16-19.3-28.9-41.2-28.9c-22.5,0-44,13.5-44,30.2l1,16C293.3,86,296.8,88.2,299.9,86.8z"></path>{" "}
                            <path d="M487.3,361.9l-0.5-2.9c0-0.2-0.1-0.4-0.1-0.6l-18.5-94c-2.4-21.7-18.2-40.6-41.2-52.3l-8.8-68.3c0-29-32.8-52.7-72.1-52.7 s-76.7,23.5-76.7,52.6c0,1.4,0.1,2.9,0.3,4.3l0.5,7.4c-7.8-2.8-16.7-4.4-26.1-4.4c-9.5,0-18.4,1.6-26.3,4.5l0.5-7.5 c0.2-1.4,0.3-2.8,0.3-4.3c0-29-37.5-52.6-76.7-52.6c-39.3,0-72.1,23.7-72.1,52.7L61,212.1c-23,11.6-38.8,30.6-41.2,52.3l-18.5,94 c0,0.2-0.1,0.4-0.1,0.6l-0.5,2.9l0,0c-0.4,3-0.7,6-0.7,9.1c0,44.6,46.7,80.8,104.2,80.8s104.2-36.2,104.2-80.8l0,0l0,0v-37 c10.3,4.8,22.6,7.5,35.7,7.5s25.3-2.7,35.6-7.4V371l0,0l0,0c0,44.6,46.7,80.8,104.2,80.8c57.4,0,104.2-36.2,104.2-80.8 C488,367.9,487.7,364.9,487.3,361.9z M104.2,422.7c-40.7,0-75.1-23.7-75.1-51.7c0-28.1,34.4-51.7,75.1-51.7s75.1,23.7,75.1,51.7 C179.3,399,144.9,422.7,104.2,422.7z M244.1,315.9c-17.1,0-31-9.7-31-21.6s13.9-21.6,31-21.6s31,9.7,31,21.6 C275.1,306.2,261.2,315.9,244.1,315.9z M383.8,422.7c-40.7,0-75.1-23.7-75.1-51.7c0-28.1,34.4-51.7,75.1-51.7s75.1,23.7,75.1,51.7 S424.5,422.7,383.8,422.7z"></path>{" "}
                            <path d="M115.5,80.2c8.3-2.1,17.2-3.2,26.3-3.2c15.9,0,32.1,3.5,46.2,9.8c3.1,1.4,6.6-0.8,6.8-4.2l1-16c0-16.7-21.5-30.2-44-30.2 c-21.9,0-40.1,12.9-41.2,28.9l0,0l-1.2,9.6C109,78.2,112.1,81.1,115.5,80.2z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <a href="/stories" className="block">
                      Stories
                    </a>
                  </div>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <div className="flex flex-row space-x-2">
                    <svg
                      fill="#000000"
                      height="25px"
                      width="25px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 480.56 480.56"
                      xmlSpace="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8 c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4 c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8 c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3 c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9 c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"></path>{" "}
                            <path d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1 c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"></path>{" "}
                            <path d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5 l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>{" "}
                    <a href="#" className="block">
                      Contact
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
