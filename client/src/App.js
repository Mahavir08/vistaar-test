import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from "./Components/Customers";
import CustomerDetails from './Components/CustomerDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Customers />} />
          <Route exact path = "/account/:id" element={<CustomerDetails />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
