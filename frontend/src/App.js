import React from "react";
import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext"; // Ensure the path is correct
import AddProjectModal from "./components/AddProjectModal"; // Ensure the path is correct

function App() {
  console.log('render app..');

  return (
    <AuthProvider>
      <AppLayout>
        <Toaster
          position="top-right"
          gutter={8}
        />
        <Routes>
          <Route path="/:projectId" element={<Task />} />
          <Route path="/" element={
            <div className="w-full flex flex-col items-center">
              <img src="./image/welcome.svg" className="w-5/12" alt="" />
              <h1 className="text-lg text-gray-600">Select or create new project</h1>
            </div>
          } />
        </Routes>
        <AddProjectModal /> {/* Add the modal component here */}
      </AppLayout>
    </AuthProvider>
  );
}

export default App;

