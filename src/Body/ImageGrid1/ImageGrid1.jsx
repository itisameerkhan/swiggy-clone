import './ImageGrid1.css'
import { CDN_URL } from '../../utils/Constants';
import ImgGrdShimmer from '../../Shimmer/ImgGridShimmer/ImgGridShimmer';

const ImageGrid1 = (props) => {

    const { imgGridCards } = props;

    return imgGridCards.length === 0 ? <ImgGrdShimmer /> : (
        <div className="offers-container">
            <h3>Best Offers For You</h3>
            <div className="offers-display-container">
               {imgGridCards.map((imgCard) => (
                  <img src={CDN_URL + imgCard?.imageId} alt="" key={imgCard?.id} className='img-grid'/>
               ))}
            </div>
        </div>
    )
}

export default ImageGrid1;