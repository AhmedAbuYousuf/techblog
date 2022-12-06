import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img
                 className="sideIcon"
                 src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""   
                 />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Team News</li>
                    <li className="sidebarListItem">Technology</li>
                    <li className="sidebarListItem">Projects</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className= "sidebarIcon fa-brands fa-facebook"></i>
                <i className= "sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
