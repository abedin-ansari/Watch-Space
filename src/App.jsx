import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

{
  /*
  
* Head
* Body
  -> Sidebar
  -> Main Content
    -> Menu Items

  -> Main Container
    -> Buttons List
    -> Video Container
      -> Video Card
      -> Videos
  
*/
}
