import React, { useState } from "react";
import "./App.css";

import Jobs from "./components/JobsCard";
import Title from "./components/Title";
import SubTitle1 from "./components/SubTitle1";
import SubTitle2 from "./components/SubTitle2";


const App = () => {
  const [name] = useState({ firstName: "MOISÉS", lastName: "LIMA" });
  const [jobs] = useState({Option1:"Desenvolvedor", Option2:"Front End", Option3:"Analista de Dados"})

  return (
    <div className="app-container">
      <Title name={name} />
      <Jobs jobs={jobs}/>
      <Title name={name} />
      <Jobs jobs={jobs}/>
      <SubTitle1/>
      <SubTitle2/>
    </div>
  );
};

export default App;
