// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './components/login'
// import Home from './components/home'

// function App() {


//   return (
//     <>
//      <Login></Login>
//      <Home></Home>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';

function App() {
  // State to manage whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (username, password) => {
    // Check if the credentials are correct
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} /> // Passing the handleLogin function as a prop
      )}
    </>
  );
}

export default App;

