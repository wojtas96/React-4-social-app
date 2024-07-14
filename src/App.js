import axios from 'axios';
import { useState } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import 'react-router-dom';


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer " + (user ? user.jwt_token : "");

  return (
    <div className="App">
      <AppNav user={user} />
      <AppRoutes user={user} setUser={setUser} />  
    </div>
  );
};

export default App;
