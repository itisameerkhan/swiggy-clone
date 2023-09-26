import './Offers.css'
import { useEffect, useState } from 'react';
import { CDN_URL } from '../../utils/Constants';

const Offers = () => {

    const [imgGridCards, setImgGridCards] = useState([]);

    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setImgGridCards(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }

    return imgGridCards.length === 0 ? <h1>Shimmer</h1> : (
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

export default Offers;