import React, { useState } from "react";
import AddLeave from "./pages/AddLeave";
import LeaveList from "./pages/LeaveList.jsx";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleLeaveAdded = () => {
    setRefreshKey((oldKey) => oldKey + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Leave Management</h1>
      </header>
      
      <div className="app-grid">
        <aside>
          <AddLeave onLeaveAdded={handleLeaveAdded} />
        </aside>
        <main>
          <LeaveList refreshKey={refreshKey} />
        </main>
      </div>
    </div>
  );
}

export default App;