import './topbar.css'

export default function topbar() {
    return (
        <div className="top">
            <div className="topLeft">
            
            </div>
            <div className="topCenter">
                 <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                 </ul>           
            </div>
            <div className="topRight">
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

