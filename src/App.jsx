import { Routes, Route } from "react-router-dom";
import Write from "./Component/Write/Write";
import Save from "./Component/Save/Save";
import Show from "./Component/Show/Show";
import { createContext, useState } from "react";

export const blogContext = createContext();

function App() {
  const [blog, setBlog] = useState([]);
  return (
    <>
      <blogContext.Provider value={{ blog, setBlog }}>
        <Routes>
          <Route path="/" element={<Write />}></Route>
          <Route path="/Save" element={<Save />}></Route>
          <Route path="/Show/:id" element={<Show />}></Route>
        </Routes>
      </blogContext.Provider>
    </>
  );
}

export default App;
