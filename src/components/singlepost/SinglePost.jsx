import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum
                    <div className="Edit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="Info">
                    <span className="singlePostAuthor">Author: </span>
                    <span className="singlePostDate">Published: </span>
                </div>
                <p className="Desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aliquam modi ut similique at assumenda quam repudiandae impedit, placeat sit expedita aut delectus dolorum nihil optio itaque veniam iste incidunt?
                </p>
            </div>
        </div>
    )
}
