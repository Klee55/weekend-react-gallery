import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryListProp }) {
    console.log(galleryListProp);

    // set instance for this component
    let listOfGallery = galleryListProp.map( gallery => {
        return (
            <GalleryItem gallery={gallery}/>
        )
    })

    return (
        <>
        {listOfGallery}
        </>
    )


}



export default GalleryList;