// import {BrowserRouter,Routers Route} from 'react-router-dom
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import  ShopContexProvider  from './context/ShopContex';


function App() {
 return (
    <div className="App">

      <ShopContexProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>} />
            {/* <Route path='/cart'/> */}
            
          </Routes>
        </BrowserRouter>

      </ShopContexProvider>
    
      
    
    </div>
  );
}

export default App;




