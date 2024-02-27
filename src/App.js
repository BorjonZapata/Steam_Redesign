import Client from './Components/Client';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './Styles.css';

function App() {
  
  return (
    <div>
      <div>
        <Client></Client>
      </div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Footer className="footer"></Footer>
      </div>
    </div>
  );
}

export default App;
