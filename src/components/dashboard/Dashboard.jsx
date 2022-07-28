import React from "react";
import { useNavigate  } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate ();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) nav("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-center">
        Logout
      </button>
    </>
  );
};

export default Dashboard;
