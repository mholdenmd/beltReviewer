// import logo from './logo.svg';
// import './App.css';
import {Router, Link} from '@reach/router';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import CreateProduct from './components/CreateProduct';
// import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
        <CreateProduct path="/api/products/create"></CreateProduct>
        
      
        <h1 className="text-center">All Products</h1>
        <Router>
          <AllProducts path="/"></AllProducts>
          <OneProduct path="/api/products/:thingid"></OneProduct>
        </Router>
        
       
      
    </div>
  );
}

export default App;
