import './ImageGrid3.css';
import { CDN_URL } from '../../utils/Constants';
import { Link } from 'react-router-dom';
import ImgGridShimmer3 from '../../Shimmer/ImgGridShimmer3/ImgGridShimmer3';

const ImageGrid3 = (props) => {

    const {imgGridCards} = props;
    console.log(imgGridCards)
    return imgGridCards.length === 0 ? <ImgGridShimmer3 /> : (
        <div className="img-grid-container-3">
            <h2>Top restaurants chain in Chennai</h2>
           <div className="img-grids-3">
           {imgGridCards.map((imgGrid) => (
                <Link to={'/restaurants/' + imgGrid?.info?.id}>
                    <div className="img-grid-card">
                        <img src={CDN_URL + imgGrid?.info?.cloudinaryImageId} alt="" className='img-grid-3' />
                        <h4 className='img-grid-3-title'>{imgGrid?.info?.name}</h4>
                        <p className='img-grid-3-ratings'>
                        <i className="fa-solid fa-star"></i>
                        <p>{imgGrid?.info?.avgRating}</p>
                        </p>
                        <p className='img-grid-3-cuisines'>
                            {imgGrid?.info?.cuisines.join(', ')}
                        </p>
                    </div>
                </Link>
            ))}
           </div>
        </div>
    )
}

export default ImageGrid3;