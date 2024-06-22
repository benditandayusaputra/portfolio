import React from "react";

const SlideOver = ({ isOpen, onClose, children, skill = {} }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 max-w-full flex transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-dark shadow-xl overflow-y-auto">
            <div className="px-4 py-6 bg-dark-100 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-bold text-light"
                  id="slide-over-title"
                >
                  {skill && skill.name}
                </h2>
                <div className="ml-3 h-7 flex items-center">
                  <button
                    className="rounded-md text-light focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close panel</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex-1 py-6 px-4 sm:px-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideOver;
