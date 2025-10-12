import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div>
          <Head />
          <Body />
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
  
*/
}
