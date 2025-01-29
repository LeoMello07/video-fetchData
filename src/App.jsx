import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
       try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data)
      } 
      catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
