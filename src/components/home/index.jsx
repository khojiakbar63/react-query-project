import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-gray-100">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Welcome to <span className="text-blue-400">Our Platform</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          A place where innovation meets creativity. Explore the latest trends, insights, 
          and resources to stay ahead in the tech world.
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-lg shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
