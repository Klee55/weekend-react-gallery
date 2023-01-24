import { useState } from "react";

function GallaryItem({ gallery, addNewLikeFunction }) {

    const [toggle, setToggle] = useState(true);

    // console.log(addNewLikeFunction);

    // add like when click
    const addLike = () => {
        console.log('submit');
        console.log(gallery.id);
        addNewLikeFunction(gallery.id);
    }

    // switch between picture and description
    const toggleDescription = () => {
        console.log('toggle clicked');
        setToggle(!toggle);
    }

    return (
        <div className="gallery">
            <div onClick={toggleDescription} className="image-description">
                {toggle && <img src={gallery.path} />}
                {!toggle && <p>{gallery.description}</p>}
            </div>
            <div className="like-button">
                <button className="heart-button" onClick={addLike}>Like</button>
            </div>
            <div className="like-count">
                {/* return this if likes are more than 0 */}
                {gallery.likes > 0 && <p>{gallery.likes} people liked this photo!</p>}
                {/* return this if no likes */}
                {!gallery.likes > 0 && <p>No likes for this photo yet</p>}
                {/* <p>{gallery.likes} love this!</p>           */}
            </div>
        </div>
    )
}


export default GallaryItem;

