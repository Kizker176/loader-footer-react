import logo from './logo.svg';
import './App.css';
import Loader from './components/loader/loading';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader></Loader>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
