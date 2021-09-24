import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import StickyTag from './elements/StickyTag';
import './index.scss'
import Welcome from './sections/Welcome';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <StickyTag/>
        <Welcome/>
      </div>
    </BrowserRouter>
  );
}

export default App;
