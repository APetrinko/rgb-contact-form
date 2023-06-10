
import './App.scss';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ContactUs />
        <Footer />
      </header>
    </div>
  );
}

export default App;
