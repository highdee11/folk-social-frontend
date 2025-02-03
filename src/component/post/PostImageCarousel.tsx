import React from "react"
import { PostMedia } from "../../core/interfaces/ModelInterface"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PostImageCarousel: React.FC<{images: PostMedia[]}> = ({images})=> {

    return (
        <div className="h-full w-full relative overflow-hidden">
            {
                images.length > 0 ? (<div className={`absolute h-full inset-0 bg-[url('https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=')] bg-cover bg-center`}></div>): ""
            }
            <div className={`absolute flex backdrop-blur-md items-center bg-black/20 gap-2 h-full`}>
                <Carousel 
                    showThumbs={false}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`block h-fit`}>
                            <img
                                src={image.url}
                                alt={`Post ${index + 1}`}
                                className="w-full  object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default PostImageCarousel