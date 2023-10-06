import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Details } from './pages/shop/details';
import { Home } from './pages/home/home';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/footer';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ShopContextProvider>
    </div>
  );
}

export default App;
