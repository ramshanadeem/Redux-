import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={ProductListing}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route>404 not found</Route>
          </Switch>
      </Router>
    
      {/* <Cards/> */}
    </div>
  );
}

export default App;
