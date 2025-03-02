import React, { useState } from "react";
import { Navbar } from "./Component/Navbar/Navbar";
import { NewsBoard } from "./Component/NewsBoard/NewsBoard";

const App = () => {

  const [category, setCateory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCateory}/>
      <NewsBoard category={category}/>
    </div>
  );
};

export default App;
