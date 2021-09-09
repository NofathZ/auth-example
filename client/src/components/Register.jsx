import "./LoginRegister.css";

function Register() {
  return (
    <div className="positioning">
      <div className="login-box">
        <div className="title-box">
          <h1>Register</h1>
        </div>
        <div className="form">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
