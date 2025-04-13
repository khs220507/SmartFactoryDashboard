import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar"; 


function App() {
  return (
    
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
      <div className="flex flex-col flex-1">
        <Dashboard />
      </div>
      </div>
    </div>
    
  );
}

export default App;
