import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Carousel from './Carousel';


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Welcome to my online store plants!</h2>
        <h3>Unique Collection Pot</h3>
        <Carousel />
        <cards/>
     
        
      </div>
    </div>
  );
}

export default App;
