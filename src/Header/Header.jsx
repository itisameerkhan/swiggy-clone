import './Header.css'
import logo from '../assets/swiggylogo.png';
import Cart from './Cart/Cart';

const Header = () => {
    return (
        <div className='header'>
          <div className="header-left">
          <img src={logo} alt="logo" className='swiggy-logo' />
          <p id='header-location'>Chennai, TamilNadu, India
          <i className="fa-solid fa-chevron-down"></i></p>
          </div>
          <div className="header-right">
            <p>
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
            </p>
            <p id="header-right-offers">
            <i className="fa-solid fa-percent"></i>
            Offers
            </p>
            <p id="header-right-help">
            <i className="fa-solid fa-circle-info"></i>
            Help
            </p>
            <p id="header-right-user">
            <i className="fa-solid fa-user"></i>
            Sign in
            </p>
            <p id="header-right-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <Cart />
            </p>
          </div>
        </div>
    )
}

export default Header;