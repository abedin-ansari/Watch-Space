import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import AnimatedLogo from "./AnimatedLogo";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import Logo from "../assets/AppLogo.png";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearcchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearcchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // Dark Mode
  const { theme, setTheme } = useTheme();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg items-center">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 mr-2 bg-gray-300 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="menu"
        />

        {/* Animated Watch Space Logo */}
        <AnimatedLogo className="h-14 w-[220px] pl-12 cursor-pointer" />

        {/**
         * Legacy image logo kept for reference (commented as requested):
         *
         * <img
         *   className="h-16 w-56 cursor-pointer"
         *   src={Logo}
         *   alt="WatchSpace logo"
         *   loading="eager"
         * />
         */}
      </div>
      <div>
        <div className="col-span-10 px-2 flex items-center justify-center">
          <input
            className="w-96 px-2 py-2 border rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-4 py-2 border border-l-0 rounded-r-full bg-gray-200 cursor-pointer">
            🔍
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white ml-52 text-black py-2 px-5 rounded-lg shadow-lg w-[25rem] border border-gray-300">
            <ul>
              {suggestion.map((s) => (
                <li className="py-2 shadow-sm hover:bg-gray-100" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-3">
        {/* 🌙 Dark Mode Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform mr-10 cursor-pointer"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        <img
          className="h-8"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAYFBMVEX///8AAAD4+Pj19fWOjo7y8vL8/Pzv7++oqKhxcXHe3t41NTUvLy+4uLjHx8fAwMBjY2N5eXlcXFxISEgiIiKwsLALCwvp6enX19cWFhabm5tWVlbQ0NA+Pj5qamqCgoLhh7ewAAADfUlEQVR4nO2b2ZaCMAxALSBgQXbZlf//yxmUcZBhacY0+JD7zDncQ9s0ScvhwDAMwzAMwzAMwzDMIkYZXlz3EpbG3iYjDFk3WSXuVFlTy8+Qs8+RmBCd7b2tDnboTbV6vHBnNXmb0+q5yT29ztmSlxDZeT+velmrx9pJy+jWvYTo9lme8ZaXEPEeXta21y6j6ap4CXGh9irVvERe0nqZjaKYSGgXwEagGONSeh3VvURO+cmUVuQPNZ1XcYWINQ6ZWAjxEiIgEzvBxOjifw4Ty6m8IGvyTkEk1kLFqCbZGSpGFWMV9+9fqCIZWIwq+bl8qhgwvtINpYSKUWWL4DhGlixCxch28cXyex6fygsaL+hKJdVKZICuHjH/NJ7WSEwyMdhYkjZXABkZ3dTvASQYdIl1j6E8y07ErcWiUvPyCGf+A8XBpB3IO0orc5d252ZDkbQIH7PZWSHtpwDMyJt2v7Szpw8Pml0a/c7wVrkYz6whCZNHSq/vWBEP5XUw11usToN4EZOuzHt7zBtClBn86bFY5RDug/tQU+Vjx58EtnuOknTjKL36mZc2p7p9PvgTUG4kw2mnzy+TjOa34RRSymKkIJPngynBhilfFqK12MgpXtqhnvYlWviv0+laz34Mu550Q33Nrahy4tUTt5OXFu3MMZOvNfM/znj1U6hzyyG9MUu3S2cf8jWuAGe1W5153sq56veo66t7gYXulJsuL9CxwxyaIm3wrpemfNZZnUBqVDqmmULCuk2H7wVuI84TYnvZyfZLVUiwd01wb38J7OxM+ah5iwbXC+2DIX8yG3gQuAZqMwPcQF8DMzV7ezMag7gxGSvlIxwP71pBADzSXSfH2zFRRxJxLNXvy6jRYDXzUNdkD9a6BJ9PboHVBgIdN6gQ4XgZCBniKxlOwEDKxMbgZGVyvph8Ax9p9hfzFey/SdHaBQ6qWYpYkThIiXVPglopHdFCRoTcwjCRUsUT+tnS9s1qFXTcvrYRcgxLT8vz7T1T21FJ+1bYuLbbb/gvzhsdskjvfZXzP7Ps/KK7oy4V/i/4y4nixCsEzzSP6D8luwaVc15Ndw38qK7mW3RXrXvMi9Lumbjk1xsOhuw2Mkg/Lum1Hm6BlSyEjyqxgl1/GjSLwIr8rHr65VXmR3VQ7PStJpgy6P/77P/8DORnKDEMwzAMwzAMwzDMR/IFp4MrOkGX/V4AAAAASUVORK5CYII="
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;
