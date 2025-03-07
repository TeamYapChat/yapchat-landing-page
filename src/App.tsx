import TransparentButton from "./components/TransparentButton";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2500
    });
  }, []);

  return (
    <div className="relative">
      {/* Overlay with blur */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <div className="relative h-full w-full">
          {/* NavBar */}
          <div className="flex flex-row items-center justify-around w-full rounded-2xl bg-white/20 shadow-md">
            <div className="text-4xl font-bold">
              <p>YapChat</p>
            </div>
            <div>
              <TransparentButton name="Support" />
              <TransparentButton name="Discover" />
            </div>
            <div>
              <TransparentButton name="Login" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main
        id="home"
        className="mx-auto flex min-h-screen max-w-3xl items-center justify-center p-8 text-center"
      >
        <div>
          {/* Cloud Container */}
          <div className="cloud-container">
            <h1 className="cloud-text mb-6 text-5xl font-bold">
              Welcome to YapChat
            </h1>
          </div>
          <p className="mb-8 text-lg opacity-90">
            A place where all yappers can find friends to talk to and people to meet.
            Chat with friends, family, and anyone as you enjoy the warmth of the virtual sun.
          </p>
          <button className="transform rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-transform hover:scale-105 hover:bg-blue-100">
            Explore Now
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section data-aos="fade-left" className="relative rounded-xl bg-white/50 px-8 py-20 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-blue-600">
            Why Choose YapChat?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Connect Instantly
              </h3>
              <p className="text-blue-700">
                Smooth conversations that flow like ocean waves
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Safe & Secure
              </h3>
              <p className="text-blue-700">
                Your privacy protected like treasures in the sand
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <svg
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Always Available
              </h3>
              <p className="text-blue-700">
                24/7 service that shines like the summer sun
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
