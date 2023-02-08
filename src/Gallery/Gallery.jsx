import "./Gallery.scss"

const Gallery = ({list}) => {
    return(
        <div>
            {list.map((item, index) => (
                <figure key={index} className={item.characterDirection === "Right" ? "lookLeft" : "lookRight"}>
                    <img src={item.image} alt="" />
                    <div className="c-divGallery">
                    <figcaption className="c-figGalley">{item.character}</figcaption>
                    <p>{item.quote}</p>
                    </div>

                </figure>
            )
            )}
        </div>
    )
}

export default Gallery;