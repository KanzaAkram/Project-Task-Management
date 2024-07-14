import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";
import { AuthThemes } from "./ThemeContext/ThemeContext";
import { useContext } from "react";
function App() {
  console.log('render app..')
  const { themes } = useContext(AuthThemes);

  return (
    <>
   
    <AppLayout>
   

      <Toaster
        position="top-right"
        gutter={8}
        />
      <Routes>
        <Route path="/:projectId" element={<Task />} />
        <Route path="/" element={
          <div className=" w-full flex flex-col items-center  ">
            <img src="./image/welcome.svg" className="w-5/12" alt="" />
            <h1 className="text-lg text-gray-600">Select or create new project</h1>
          </div>
        } />
      </Routes>
        
    </AppLayout>
      </>
  );
}

export default App;
