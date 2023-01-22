import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryListProp, addNewLikeFunction }) {
    console.log(galleryListProp);

    // set instance for this component
    let listOfGallery = galleryListProp.map( gallery => {
        return (
            <GalleryItem 
            key={gallery.id} 
            gallery={gallery}
            addNewLikeFunction={addNewLikeFunction}
            />
        )
    })

    return (
        <div>
        {listOfGallery}
        </div>
    )


}



export default GalleryList;