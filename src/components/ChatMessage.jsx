import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 rounded-lg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAYFBMVEX///8AAAD4+Pj19fWOjo7y8vL8/Pzv7++oqKhxcXHe3t41NTUvLy+4uLjHx8fAwMBjY2N5eXlcXFxISEgiIiKwsLALCwvp6enX19cWFhabm5tWVlbQ0NA+Pj5qamqCgoLhh7ewAAADfUlEQVR4nO2b2ZaCMAxALSBgQXbZlf//yxmUcZBhacY0+JD7zDncQ9s0ScvhwDAMwzAMwzAMwzDMIkYZXlz3EpbG3iYjDFk3WSXuVFlTy8+Qs8+RmBCd7b2tDnboTbV6vHBnNXmb0+q5yT29ztmSlxDZeT+velmrx9pJy+jWvYTo9lme8ZaXEPEeXta21y6j6ap4CXGh9irVvERe0nqZjaKYSGgXwEagGONSeh3VvURO+cmUVuQPNZ1XcYWINQ6ZWAjxEiIgEzvBxOjifw4Ty6m8IGvyTkEk1kLFqCbZGSpGFWMV9+9fqCIZWIwq+bl8qhgwvtINpYSKUWWL4DhGlixCxch28cXyex6fygsaL+hKJdVKZICuHjH/NJ7WSEwyMdhYkjZXABkZ3dTvASQYdIl1j6E8y07ErcWiUvPyCGf+A8XBpB3IO0orc5d252ZDkbQIH7PZWSHtpwDMyJt2v7Szpw8Pml0a/c7wVrkYz6whCZNHSq/vWBEP5XUw11usToN4EZOuzHt7zBtClBn86bFY5RDug/tQU+Vjx58EtnuOknTjKL36mZc2p7p9PvgTUG4kw2mnzy+TjOa34RRSymKkIJPngynBhilfFqK12MgpXtqhnvYlWviv0+laz34Mu550Q33Nrahy4tUTt5OXFu3MMZOvNfM/znj1U6hzyyG9MUu3S2cf8jWuAGe1W5153sq56veo66t7gYXulJsuL9CxwxyaIm3wrpemfNZZnUBqVDqmmULCuk2H7wVuI84TYnvZyfZLVUiwd01wb38J7OxM+ah5iwbXC+2DIX8yG3gQuAZqMwPcQF8DMzV7ezMag7gxGSvlIxwP71pBADzSXSfH2zFRRxJxLNXvy6jRYDXzUNdkD9a6BJ9PboHVBgIdN6gQ4XgZCBniKxlOwEDKxMbgZGVyvph8Ax9p9hfzFey/SdHaBQ6qWYpYkThIiXVPglopHdFCRoTcwjCRUsUT+tnS9s1qFXTcvrYRcgxLT8vz7T1T21FJ+1bYuLbbb/gvzhsdskjvfZXzP7Ps/KK7oy4V/i/4y4nixCsEzzSP6D8luwaVc15Ndw38qK7mW3RXrXvMi9Lumbjk1xsOhuw2Mkg/Lum1Hm6BlSyEjyqxgl1/GjSLwIr8rHr65VXmR3VQ7PStJpgy6P/77P/8DORnKDEMwzAMwzAMwzDMR/IFp4MrOkGX/V4AAAAASUVORK5CYII="
        alt="user-logo"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
