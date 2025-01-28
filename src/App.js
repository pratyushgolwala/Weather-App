import './App.css';
import MenuCards from './component/Body';
import Navbar from './component/Navbar';import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  
  return (
    <>


    
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/US" element={<MenuCards key="US"  cityIds="5128581,5368361,4887398,4671654,5809844"  country="US" />} />
      <Route path="/UK" element={<MenuCards key="UK"  cityIds="2643743,2655603,2650225,2633274,2644210"  country="UK" />} />
      <Route path="/France" element={<MenuCards key="France"  cityIds="2988507,2995469,3031582,2973783,2972315"  country="France" />} />
      <Route path="/India" element={<MenuCards key="India"  cityIds="1275339,1273294,1264527,1261481,1277333"  country="India" />} />
      <Route path="/Australia" element={<MenuCards key="Australia"  cityIds="2147714,2158177,2174003,2063523,2078025"  country="Australia" />} />
      <Route path="/Canada" element={<MenuCards key="Canda"  cityIds="6167865,6094817,6077243,5913490,6173331"  country="Canada" />} />
      <Route path="/Brazil" element={<MenuCards key="Brazil"  cityIds="3448439,3451190,3470127,3469058,3405870"  country="Brazil" />} />
      <Route path="/Japan" element={<MenuCards key="Japan"  cityIds="1850147,1853909,1863967,1856057,1848354"  country="Japan" />} />
      <Route path="/SA" element={<MenuCards key="SA"  cityIds="3369157,993800,964137,1007311"  country="SA" />} />

    </Routes>

    </Router>

    
    </>
  );
}

export default App;
