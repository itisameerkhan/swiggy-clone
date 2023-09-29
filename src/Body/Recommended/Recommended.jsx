import { useState } from "react";
import { CDN_URL } from "../../utils/Constants";

const Recommended = (props) => {

    const {recommendedList} = props;
    const [btnValue, setBtnValue] = useState('Add')
    
    console.log(recommendedList)
    
    return (
        <div className="res-menu-group-map">
           <h2>Recommended</h2>
           {recommendedList.map((card) => (
            <div className="res-menu-group-card" key={card?.card?.info?.id}>
                <div className="res-menu-group-card-left">
                  <h4>{card?.card?.info?.name}</h4>
                  <h5>₹ {card?.card?.info?.price / 100}</h5>
                  <p id="grouped-card-desc">{card?.card?.info?.description}</p>
                </div>
                <div className="res-menu-group-card-right">
                    <img src={CDN_URL + card?.card?.info?.imageId} alt="" />
                    <button className="group-card-btn" onClick={ () => setBtnValue('Added')}>
                        {btnValue}
                    </button>
                </div>
            </div>
           ))}
        </div>
    )
}

export default Recommended;