import { CDN_URL } from '../../utils/Constants';
import './AccordionMenu.css';
import { useState } from 'react';

const AccordionMenu = ({data}) => {

    const [btnValue, setBtnValue] = useState('Add')
    console.log(data)
    return (
        <div className="accordion-container" key={data?.card?.info?.title}>
            {data.map((list) => (
               <div className="accordion-container-main">
                 <div className="accordion-main-left">
                 <p className='accordion-name'>{list?.card?.info?.name}</p>
                 <h5 className="accordion-price">₹ {list?.card?.info?.price ? list?.card?.info?.price /100 : list?.card?.info?.defaultPrice /100}</h5>
                 <p className="accordion-description">{list?.card?.info?.description}</p>
                 </div>
                 <div className="accordion-main-right">
                    <img src={CDN_URL + list?.card?.info?.imageId} alt="" className='accordion-img' />
                    <button className='accordion-add-btn' onClick={()=> setBtnValue('Added')}>{btnValue}</button>
                    
                 </div>
               </div>
            ))}
        </div>
    )
}

export default AccordionMenu;