import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginform">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter Email..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter Password..." />
                <button className="loginButton">Login</button>
                <button className="loginRegister">Register</button>
            </form>
        </div>
    )
}
