import React from "react";

const commentsData = [
  {
    name: "John Doe",
    text: "This is a great video!",
    replies: [
      {
        name: "Alice",
        text: "I agree with you, John!",
      },
    ],
  },
  {
    name: "Jane Smith",
    text: "I learned a lot from this tutorial.",
    replies: [
      {
        name: "Bob",
        text: "Me too, Jane!",
      },
    ],
  },
  {
    name: "Sam Wilson",
    text: "Can you make a video on React hooks?",
    replies: [
      {
        name: "Chris Evans",
        text: "That would be awesome!",
      },
    ],
  },
  {
    name: "Emily Davis",
    text: "Thanks for sharing this content.",
    replies: [
      {
        name: "Olivia Brown",
        text: "You're welcome, Emily!",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm p-3 rounded-lg my-2">
      <img
        className="w-10 h-10 rounded-2xl"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAYFBMVEX///8AAAD4+Pj19fWOjo7y8vL8/Pzv7++oqKhxcXHe3t41NTUvLy+4uLjHx8fAwMBjY2N5eXlcXFxISEgiIiKwsLALCwvp6enX19cWFhabm5tWVlbQ0NA+Pj5qamqCgoLhh7ewAAADfUlEQVR4nO2b2ZaCMAxALSBgQXbZlf//yxmUcZBhacY0+JD7zDncQ9s0ScvhwDAMwzAMwzAMwzDMIkYZXlz3EpbG3iYjDFk3WSXuVFlTy8+Qs8+RmBCd7b2tDnboTbV6vHBnNXmb0+q5yT29ztmSlxDZeT+velmrx9pJy+jWvYTo9lme8ZaXEPEeXta21y6j6ap4CXGh9irVvERe0nqZjaKYSGgXwEagGONSeh3VvURO+cmUVuQPNZ1XcYWINQ6ZWAjxEiIgEzvBxOjifw4Ty6m8IGvyTkEk1kLFqCbZGSpGFWMV9+9fqCIZWIwq+bl8qhgwvtINpYSKUWWL4DhGlixCxch28cXyex6fygsaL+hKJdVKZICuHjH/NJ7WSEwyMdhYkjZXABkZ3dTvASQYdIl1j6E8y07ErcWiUvPyCGf+A8XBpB3IO0orc5d252ZDkbQIH7PZWSHtpwDMyJt2v7Szpw8Pml0a/c7wVrkYz6whCZNHSq/vWBEP5XUw11usToN4EZOuzHt7zBtClBn86bFY5RDug/tQU+Vjx58EtnuOknTjKL36mZc2p7p9PvgTUG4kw2mnzy+TjOa34RRSymKkIJPngynBhilfFqK12MgpXtqhnvYlWviv0+laz34Mu550Q33Nrahy4tUTt5OXFu3MMZOvNfM/znj1U6hzyyG9MUu3S2cf8jWuAGe1W5153sq56veo66t7gYXulJsuL9CxwxyaIm3wrpemfNZZnUBqVDqmmULCuk2H7wVuI84TYnvZyfZLVUiwd01wb38J7OxM+ah5iwbXC+2DIX8yG3gQuAZqMwPcQF8DMzV7ezMag7gxGSvlIxwP71pBADzSXSfH2zFRRxJxLNXvy6jRYDXzUNdkD9a6BJ9PboHVBgIdN6gQ4XgZCBniKxlOwEDKxMbgZGVyvph8Ax9p9hfzFey/SdHaBQ6qWYpYkThIiXVPglopHdFCRoTcwjCRUsUT+tnS9s1qFXTcvrYRcgxLT8vz7T1T21FJ+1bYuLbbb/gvzhsdskjvfZXzP7Ps/KK7oy4V/i/4y4nixCsEzzSP6D8luwaVc15Ndw38qK7mW3RXrXvMi9Lumbjk1xsOhuw2Mkg/Lum1Hm6BlSyEjyqxgl1/GjSLwIr8rHr65VXmR3VQ7PStJpgy6P/77P/8DORnKDEMwzAMwzAMwzDMR/IFp4MrOkGX/V4AAAAASUVORK5CYII="
        alt="avatar"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
