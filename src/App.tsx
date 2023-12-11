import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="bg-black">
      <main>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <img
                className="h-11"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex">
                  <span className="ring-indigo-500 ring-inset ring-offset-black text-indigo-400 leading-6 font-semibold text-sm py-1 px-3 bg-indigo-500/10 rounded-full">Latest updates</span>
                  <span className="divide-x-[1.5rem] text-gray-300 leading-6 font-medium text-sm items-center inline-flex">
                    <span>Just shipped v1.0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="divide-x-[0.5rem] text-gray-500 w-5 h-5">
                      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </a>
              </div>
              <h1>Deploy to the cloud with confidence</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
