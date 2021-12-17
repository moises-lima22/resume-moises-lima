import React, { useState } from "react";
import "./App.css";

import Jobs from "./components/jobsCard";
import Title from "./components/Title";

const App = () => {
  const [name] = useState({ firstName: "MOISÉS", lastName: "LIMA" });
  const [jobs] = useState({Option1:"Desenvolvedor", Option2:"Front End", Option3:"Analista de Dados"})

  return (
    <div className="app-container">
      <Title name={name} />
      <Jobs jobs={jobs}/>
    </div>
  );
};

export default App;
