import './RestaurantCategories.css';
import AccordionMenu from '../AccordionMenu/AccordionMenu';
import { useState } from 'react';

const RestaurantCategories = (props) => {

    const [showItems, setShowItems] = useState(true)
    const [chevronState, setChevronState] = useState("fa-solid fa-chevron-down");
    const {resCategory} = props;

    const HandleClick = () => {
        setShowItems(!showItems)
        setChevronState(chevronState === 'fa-solid fa-chevron-down' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down');
    }

    return (
        <div className="res-category">
            <div className="res-category-accordion-button" onClick={HandleClick}>
            <h3>{resCategory?.title} ({resCategory?.itemCards.length})</h3>
            <i className={chevronState}></i>
            </div>
            {showItems && <AccordionMenu data={resCategory?.itemCards} />}
            <div className="bottom-div"></div>
        </div>
    )
}

export default RestaurantCategories;