import TransparentButton from "./components/TransparentButton";
import "./App.css";

function App() {
  return (
    <div>
      {/* Overlay with blur */}
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
        <div className="relative h-full w-full">
          {/* NavBar */}
          <div className="relative top-0 h-1/10 w-full bg-white/20 shadow-md">
            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-2xl font-bold">
              <p>YapChat</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <TransparentButton name="Support" />
              <TransparentButton name="Discover" />
            </div>
            <div className="absolute top-1/2 right-10 -translate-y-1/2">
              <TransparentButton name="Login" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main
        id="home"
        className="mx-auto flex h-screen max-w-3xl items-center justify-center p-8 text-center"
      >
        <div>
          <h1 className="mb-6 text-5xl font-bold drop-shadow-lg">
            Welcome to YapChat
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Experience the serenity of the ocean with a touch of sunset warmth.
            Discover a place where the waves meet the sky.
          </p>
          <button className="transform rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-transform hover:scale-105 hover:bg-blue-100">
            Explore Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
