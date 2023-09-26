import './ImageGrid2.css';
import { CDN_URL } from '../../utils/Constants';
import ImgGridShimmer2 from '../../Shimmer/ImgGridShimmer2/ImgGridShimmer2';

const ImageGrid2 = (props) => {

    const {imgGridCards} = props;

    return imgGridCards.length === 0 ? <ImgGridShimmer2 /> :  (
        <div className="image-grid-container-2">
            <h3>What's on your mind?</h3>
            <div className="img-grids-2">
            {imgGridCards.map((imgGrid) => (
                <img src={CDN_URL + imgGrid?.imageId} key={imgGrid?.id} alt="" className='img-grid-2' />
            ))}
            </div>
        </div>
    )
}

export default ImageGrid2;