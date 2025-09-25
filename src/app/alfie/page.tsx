"use client";

import { useState } from "react";

export default function Alfie() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [noCount1, setNoCount1] = useState(0);
  const [noCount2, setNoCount2] = useState(0);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "080524") {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password! Try again 💕");
    }
  };

  const getFirstMessage = () => {
    const responses = [
      "Hey you! Are you free the weekend of Nov 21?",
      "Come on, just one weekend? 🥺",
      "Pleaseeeee? 🥺",
      "I promise it'll be worth it! 😊",
    ];
    return responses[noCount1];
  };

  const getSecondMessage = () => {
    const responses = [
      "I think we'd be Popular together 😊 How about a date night that's a little Wicked? 🧙‍♀️",
      "Are you sure? They say love makes you feel like you're defying gravity... 🧹",
    ];
    return responses[noCount2];
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-neutral-800 dark:text-neutral-400">
              Enter the secret code...
            </h1>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-12">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-3 border-2 border-primary-200 dark:border-primary-700 rounded-2xl focus:border-primary-400 dark:focus:border-primary-600 focus:outline-none text-center b1 bg-secondary-300 dark:bg-primary-900 text-neutral-900 dark:text-neutral-100"
              autoFocus
            />
            <button
              type="submit"
              className="w-full block mx-auto bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 py-3 px-8 rounded-2xl b1 font-medium animate-opacity transition-all duration-300 hover:translate-y-[-2px]"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-neutral-900 dark:text-neutral-100 leading-relaxed">
              {getFirstMessage()}
            </h2>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setStep(2)}
              className="w-full block mx-auto bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 py-4 px-8 rounded-2xl b1 font-medium animate-opacity transition-all duration-300 hover:translate-y-[-2px]"
            >
              Yes! 💚
            </button>

            {noCount1 < 3 && (
              <button
                onClick={() => setNoCount1(noCount1 + 1)}
                className="w-full block mx-auto border-2 border-neutral-400 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 py-4 px-8 rounded-2xl b1 font-medium animate-opacity transition-all duration-300 hover:translate-y-[-2px] hover:border-neutral-600 dark:hover:border-neutral-400"
              >
                No 💔
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-neutral-900 dark:text-neutral-100 leading-relaxed">
              {getSecondMessage()}
            </h2>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setStep(3)}
              className="w-full block mx-auto bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 py-4 px-8 rounded-2xl b1 font-medium animate-opacity transition-all duration-300 hover:translate-y-[-2px]"
            >
              Yes! 💚
            </button>

            {noCount2 < 1 && (
              <button
                onClick={() => setNoCount2(noCount2 + 1)}
                className="w-full block mx-auto border-2 border-neutral-400 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 py-4 px-8 rounded-2xl b1 font-medium animate-opacity transition-all duration-300 hover:translate-y-[-2px] hover:border-neutral-600 dark:hover:border-neutral-400"
              >
                No 💔
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Step 3 - Final celebration
  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-neutral-900 dark:text-neutral-100 mb-4">
          YAYYYYYY!!! Can't wait for our date! 💕
        </h2>
        <div className="text-4xl space-x-2">
          <span className="inline-block animate-pulse">🤭</span>
          <span
            className="inline-block animate-pulse"
            style={{ animationDelay: "0.2s" }}
          >
            ☺️
          </span>
          <span
            className="inline-block animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            😚
          </span>
        </div>
      </div>
    </div>
  );
}
