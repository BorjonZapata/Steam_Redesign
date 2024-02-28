import Client from './Components/Client';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Library from './Components/Library';
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
        <Library></Library>
      </div>
      <div>
        <Footer ></Footer>
      </div>
    </div>
  );
}

export default App;
