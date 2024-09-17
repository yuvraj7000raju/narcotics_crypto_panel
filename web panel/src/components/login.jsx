import "./login.css"

export default function Login() {
  return (
    <div className="login">
        
      <div className="login__container">
      <div className="img1"><img src="https://narcoticsindia.nic.in/assets/images/logo/05.png" className="img11" alt="" /></div>
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          <label className="login__label">
            <span className="nn">Username :</span>
            <input className="login__input" type="text" />
          </label>
          <label className="login__label">
          <span className="nn">password&nbsp; :</span>
            <input className="login__input" type="password" />
          </label>
          <span className="kk"><button className="login__button">Login</button></span>
          
        </form>
      </div>
    </div>
  )
}