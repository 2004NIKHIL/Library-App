import React from "react";
import Login from "./components/Login";
import useAuthStore from "./store/useAuthStore";

const App = () => {
  const { isLoggedIn, user, logout } = useAuthStore();

  return (
    <div>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <div>
          <h2>Welcome, {user?.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
