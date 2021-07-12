import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Footer from './Components/LayoutArea/Footer/Footer';
import Body from './Components/LayoutArea/Body/Body';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Components/LayoutArea/Routing/Routing';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Body/>
      <Routing/> 
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
