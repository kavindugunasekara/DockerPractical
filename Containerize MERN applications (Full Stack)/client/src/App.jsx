import { useState , useEffect } from "react" ;
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import axios from 'axios';

function App() {

  const [users , setUsers ] = useState([]);
 //fetch users
 useEffect(() => {
  axios
     .get("http://localhost:5000/api/users")
     .then((response) => {
         setUsers(response.data.data);
  })
  .catch((error) => {
      console.error("there was an error fetching users" , error);
  });
  }, []);

  return  ( <div className="App">
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.age}
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  </div>
);
}


export default App;
