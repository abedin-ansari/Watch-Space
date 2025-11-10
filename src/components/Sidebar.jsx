import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg min-w-[280px] w-[280p] border-r border-gray-200 dark:border-gray-700">
      <ul className="space-y-1">
        <li>
          <Link
            to="/"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
          >
            🏠 Home
          </Link>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          📹 Shorts
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎬 Videos
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🔴 Live
        </li>
      </ul>
      <h1 className="font-bold pt-6 pb-2 px-4 text-gray-500 dark:text-gray-400 text-sm uppercase">
        Subscription
      </h1>
      <ul className="space-y-1">
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎵 Music
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          ⚽ Sport
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎮 Gaming
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎬 Movies
        </li>
      </ul>
      <h1 className="font-bold pt-6 pb-2 px-4 text-gray-500 dark:text-gray-400 text-sm uppercase">
        Watch Later
      </h1>
      <ul className="space-y-1">
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎵 Music
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          ⚽ Sport
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎮 Gaming
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors cursor-pointer">
          🎬 Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
