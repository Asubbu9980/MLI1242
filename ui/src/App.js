import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import Admin1 from './components/Admin1';
import Cart from './components/Cart';
import Cart1 from './components/Cart1';
import { createContext, useEffect } from "react";
import createPersistedState from 'use-persisted-state';

export const userContext=createContext();
function App() {

  const useCounterState = createPersistedState('cartitems');         
const [cartitems,setCartitems]=useCounterState([]);
  return (
    <>
   <div>
   <userContext.Provider value={[cartitems,setCartitems]} >
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin1' element={<Admin1 />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart1' element={<Cart1 />} />
      </Routes>
    </Router>
    </userContext.Provider>
   </div>
    </>
  );
}

export default App;
