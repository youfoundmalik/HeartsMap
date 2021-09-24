import Header from './components/Header';
import StickyTag from './elements/StickyTag';
import './index.scss'
import Welcome from './sections/Welcome';


function App() {
  return (
      <div className='App'>
        <Header/>
        <StickyTag/>
        <Welcome/>
      </div>
  );
}

export default App;
