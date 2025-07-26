import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="font-bold text-lg">
        <Link to="/">fixit</Link>
      </h1>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/report">Note Issue</Link>
            <button onClick={handleLogout} className="bg-white text-blue-600 px-2 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
