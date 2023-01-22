
function GallaryItem({ gallery, addNewLikeFunction }) {

    console.log(addNewLikeFunction);

    const addLike = () => {
        console.log('submit');
        console.log(gallery.id);
        addNewLikeFunction(gallery.id);
    }

    return (
        <div>
            <h1><img src={gallery.path}/></h1>
            <button onClick={addLike}>Like</button>
            <p>{gallery.likes} love this!</p>
        </div>
    )
}


export default GallaryItem;