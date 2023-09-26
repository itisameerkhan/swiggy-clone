import ReactDOM from 'react-dom/client'
import '../src/index.css'
import Header from './Header/Header'
import Body from './Body/Body'

ReactDOM.createRoot(document.getElementById('root')).render(

   <div className="root">
    <Header />
   <Body />
   </div>
)
