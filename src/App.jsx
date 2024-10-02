import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';
import Dashboard from './pages/Dashboard';


function App() {
 // const [apps] = useState(appsData)
  const [users, setUsers] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])
 
/*
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch ('https://randomuser.me/api?results=50');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchUsers();


  }, []);
 */
/*




  const hirePerson = (user) => {
    setHiredPeople([...hiredPeople, user]);
    setUsers(users.filter(u => u.login.uuid !== user.login.uuid));
  };
*/
  
useEffect(() => {
  fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUsers(data.results))
}, [])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to = "/">Dashboard</Link></li> 
                                   
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path = "/" element = {<Dashboard users ={users} hiredPeople = {hiredPeople}/>}/>
       <Route path='/view/:id' element={<PersonProfile setHiredPeople ={setHiredPeople} hiredPeople={hiredPeople}/>}/> 
      </Routes>
     
    </>
  );
}
export default App;
