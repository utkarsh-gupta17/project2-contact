import './App.css'
import Navigation from './components/Navigation';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <div>
      <Navigation/>
      <div className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </div>
    </div>
  )
}

export default App;
