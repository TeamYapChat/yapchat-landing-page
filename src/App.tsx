import TransparentButton from "./components/TransparentButton";
import FeatureSection from "./components/FeatureSection";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Overlay with blur */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <div className="relative h-full w-full">
          {/* NavBar */}
          <div className="flex w-full flex-row items-center justify-around rounded-2xl bg-white/20 shadow-md">
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
              Enjoy Chatting With Anyone, Anywhere, Anytime Without Delay
            </h1>
          </div>
          <p className="mb-8 text-lg opacity-90">
            YapChat makes texting and communication enjoyable and relaxing with
            themes that soothe and speeds that are unmatched by other messaging
            services.
          </p>
          <button className="transform rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-blue-900 shadow-lg transition-transform hover:scale-105 hover:bg-blue-100">
            Start Yapping
          </button>
        </div>
      </main>

      {/* Feature Section */}
      <FeatureSection
        sideJustify="left"
        title="Flexible File Sharing Between Friends"
        body="Easily share files between everyone in a chat room. Almost all file types are allowed, so share away!"
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      />
      <FeatureSection
        sideJustify="right"
        title="Statuses to Tell When Your Friends Are Online"
        body="Ever wonder if your friends are online to talk? Statuses show when people are talking, idle, on do not disturb, and offline."
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      />
      <FeatureSection
        sideJustify="left"
        title="Join and Leave Chats Whenever"
        body="There's no need to create tons of group chats for adding one or two people. Now, you can invite friends to existing chats, and can leave them whenever you like."
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      />
    </div>
  );
}

export default App;
