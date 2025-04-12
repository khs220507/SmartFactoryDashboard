import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex h-screen gap-4">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
