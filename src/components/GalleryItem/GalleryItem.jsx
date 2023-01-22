
function GallaryItem({ gallery }) {
    return (
        <div>
            <h1><img src={gallery.path}/></h1>
            <button>Like</button>
            <p>{gallery.likes} love this!</p>
        </div>
    )
}


export default GallaryItem;