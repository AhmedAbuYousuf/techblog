import "./register.css"

export default function register() {
    return (
        <div className="Register">
            <span className="registerTitle">Register</span>
            <form className="registerform">
            <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Email..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Password..." />
                <button className="registerButton">Register</button>
                <button className="registerLogin">Login</button>
            </form>
        </div>
    )
}
