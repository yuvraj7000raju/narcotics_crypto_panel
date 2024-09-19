// import "./login.css"

// export default function Login() {
  
//   return (
//     <div className="login">
//         {/* <Button>hello</Button> */}
//       <div className="login__containers">
//       <div className="img1"><img src="https://narcoticsindia.nic.in/assets/images/logo/05.png" className="img11" alt="" /></div>
//         <h1 className="login__title">Login</h1>
//         <form className="login__form">
//           <label className="login__label">
//             <span className="nn">Username :</span>
//             <input className="login__input" type="text" />
//           </label>
//           <label className="login__label">
//           <span className="nn">password&nbsp; :</span>
//             <input className="login__input" type="password" />
//           </label>
//           <span className="kk"><button className="login__button">Login</button></span>
          
//         </form>
//       </div>
//     </div>
//   )
// }


import { useState } from 'react';
import "./login.css";

export default function Login({ onLogin }) {
  // States for username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    onLogin(username, password); // Call the onLogin function passed from App.jsx
  };

  return (
    <div className="login">
      <div className="login__containers">
        <div className="img1">
          <img
            src="https://narcoticsindia.nic.in/assets/images/logo/05.png"
            className="img11"
            alt=""
          />
        </div>
        <h1 className="login__title">Login</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="nn">Username :</span>
            <input
              className="login__input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </label>
          <label className="login__label">
            <span className="nn">Password&nbsp; :</span>
            <input
              className="login__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </label>
          <span className="kk">
            <button className="login__button" type="submit">
              Login
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
