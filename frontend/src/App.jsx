import React from "react";
import AddLeave from "./pages/AddLeave";
import LeaveList from "./pages/LeaveList.jsx";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Leave Management</h1>
      </header>
      
      <div className="app-grid">
        <aside>
          <AddLeave />
        </aside>
        <main>
          <LeaveList />
        </main>
      </div>
    </div>
  );
}

export default App;