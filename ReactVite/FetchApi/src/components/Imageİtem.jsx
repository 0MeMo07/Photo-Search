
function İmageItem({imageİtems}) {
    console.log(imageİtems)
    return ( 
        <>
        <img className="imageListImg" src={imageİtems.urls.small} alt={imageİtems.alt_description} />
        </>
     );
}

export default İmageItem;