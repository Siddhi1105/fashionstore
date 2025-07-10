
import './App.css';
import Landingpagee from './Pages/Landingpagee.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kidspage from './Pages/Kidspage.jsx';
import Malepage from './Pages/Malepage.jsx';  
import Femalepage from './Pages/Femalepage.jsx';
import Cart from './Pages/Cart.jsx';

import Accountpage from './Pages/Accountpage.jsx';
import Signupp from './Pages/Signupp.jsx';


function App() {
  return (
    <div className="App"> 
      
      <Router>
        <Routes>
          <Route path="/" element={<Landingpagee />} />
          <Route path="/kids" element={<Kidspage />} />
          <Route path='/female' element={<Femalepage />} />
          <Route path="/male" element={<Malepage />} />
          <Route path="/carts" element={<Cart/>}/>
         
          <Route path="/account" element={<Accountpage/>}/>
          <Route path='/signup' element={<Signupp/>}/>

          {/* Add more routes as needed */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
