import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="UpdateTitle">Update Your Account</span>
                    <span className="DeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="ProfilePicture">
                        <img 
                            src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <label htmlFor="File Input">
                            <i className=" PPIcon fa-solid fa-user"></i>
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={{display:"none"}}
                            className="ProfilePictureInput"
                        />
                        <label>Username</label>
                        <input type="text" placeholder="Name" />
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                        <label>Password</label>
                        <input type="password" />
                        <button className="Submit">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
