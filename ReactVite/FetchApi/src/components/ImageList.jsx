import İmageItem from "./Imageİtem";

function ImageList({imagesPlaceHolder}) {
    return (  
        <>
        <div className="imageList">
            {imagesPlaceHolder.map((image, index) => {
                return <İmageItem imageİtems={image} key={index}/>
            })}
        </div>
        </>
    );
}

export default ImageList;