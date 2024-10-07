import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";
import Dashboard from "./pages/Dashboard";
import { useNavigate } from "react-router";

function App() {
  const [users, setUsers] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  const hirePerson = (person, wage) => {
    setHiredPeople((items) => {
      const hired = items.some(
        (hired) => hired.login.uuid === person.login.uuid
      );
      if (hired) return items;
      const hiredWithWage = { ...person, wage };
      return [...items, hiredWithWage];
    });
    navigate("/");
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard users={users} hiredPeople={hiredPeople} />}
          
        />
        <Route
          path="/view/:id"
          element={<PersonProfile hirePerson={hirePerson} />}
        />
      </Routes>
    </>
  );
}
export default App;
