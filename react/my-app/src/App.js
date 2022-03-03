import React from "react";
import "./App.css";
// import Card2 from "./components/card/Card2.component";

import CardList from "./components/card/CardList.component";
import CardTailwind from "./components/card/CardTailwind.component";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };
function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   <CardList>
    //     <Card2 secondary />
    //     <Card2 />
    //     <Card2 />
    //     <Card2 />
    //     <Card2 />
    //     <Card2 />
    //   </CardList>
    // </ThemeProvider>
    <div>
      <CardList>
        <CardTailwind primary />
      </CardList>
    </div>
  );
}

export default App;
