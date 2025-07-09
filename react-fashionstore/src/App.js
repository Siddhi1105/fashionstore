
import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kids from './Pages/Kids.jsx';
import Male from './Pages/Male.jsx';  
import Female from './Pages/Female.jsx';
import Carts from './Pages/Carts.jsx';

import Account from './Pages/Account.jsx';


function App() {
  return (
    <div className="App"> 
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/kids" element={<Kids />} />
          <Route path='/female' element={<Female />} />
          <Route path="/male" element={<Male />} />
          <Route path="/carts" element={<Carts/>}/>
         
          <Route path="/account" element={<Account/>}/>

          {/* Add more routes as needed */}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
