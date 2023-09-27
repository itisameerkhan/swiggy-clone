import ReactDOM from 'react-dom/client'
import '../src/index.css'
import Header from './Header/Header'
import Body from './Body/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Router>
      <div className="root">
         <Header />
         <Routes>
           <Route path='/'>
              <Route index element={<Body />}></Route>
              <Route path='/restaurants/:id' element={<RestaurantMenu />} />
           </Route>
         </Routes>
      </div>
   </Router>
)
