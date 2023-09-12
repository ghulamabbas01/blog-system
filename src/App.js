import React from "react";
import Login from "./pages/login";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Login />
      </div>
    </AuthProvider>
  );
};

export default App;
