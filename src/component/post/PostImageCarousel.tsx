import React, { useState } from "react"
import { PostMedia } from "../../core/interfaces/ModelInterface"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PostImageCarousel: React.FC<{images: PostMedia[]}> = ({images})=> {

    const [currentMedia, setCurrentMedia] = useState(images[0])

    const onchange = (index: number)=> {
        setCurrentMedia(images[index])
    }

    return (
        <div className="h-full w-full relative overflow-hidden">
            {
                images.length > 0 ? (<div style={{backgroundImage: `url(${currentMedia.url})`}} className={`absolute h-full inset-0 bg-cover bg-center`}></div>): ""
            }
            <div className={`absolute flex backdrop-blur-md items-center bg-black/20 gap-2 h-full`}>
                <Carousel 
                    showThumbs={false}
                    className="h-full"
                    onChange={onchange}
                    swipeable={true}
                    useKeyboardArrows={true}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`h-full content-center`}>
                            <img
                                src={image.url}
                                alt={`Post ${index + 1}`}
                                className="w-full object-contain"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default PostImageCarousel