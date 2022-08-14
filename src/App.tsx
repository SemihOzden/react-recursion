import React from 'react';
import './App.css';
import { familyTree } from "./staticData/familyMembers";
import Family from "./components/Family";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Family familyTree={familyTree} />
        
      </header>
    </div>
  );
}

export default App;
