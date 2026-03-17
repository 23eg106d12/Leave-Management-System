import React from "react";
import AddLeave from "./pages/AddLeave";
import LeaveList from "./pages/LeaveList";

function App() {
  return (
    <div>
      <h1>Leave Management System</h1>
      <AddLeave />
      <LeaveList />
    </div>
  );
}

export default App;