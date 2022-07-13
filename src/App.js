import React, { Suspense } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import "./App.scss";

function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <MainLayout />
      </div>
    </Suspense>
  );
}

export default App;
