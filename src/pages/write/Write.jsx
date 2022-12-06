import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
                src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" >
            </img>
            <form className="writeform"> 
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Input text..." 
                    type="text" 
                    className="writeInput writeText"
                ></textarea>
                </div>
                <button className="submit">Publish</button>
            </form>
        </div>
    )
}
