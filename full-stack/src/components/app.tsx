import ContestsList from "./ContestsList";
import Header from "./header";
import { useState } from "react";

const App = ({initialData}) => {
  return (
    <div className="container">
      <Header message="Naming Contests" />
      <ContestsList key={initialData.contests.id} initialData={initialData.contests}/>
    </div>
  );
};

export default App;
