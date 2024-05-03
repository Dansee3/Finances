import '../style/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavLeft from './NavLeft.js';

import PagesLayout from './pages/PagesLayout.js';
import Navs from './navs/Navs.js';
import Loading from './Loading.js';
import Login from './Logowanie.js';

const App = () => {
  const setLoading = true;

  return (
    <Router>
      
      {setLoading ? <Login  /> :<div
        id="container"
        className="grid grid-cols-[25%_minmax(75%,_1fr)] 
        grid-rows-[1fr, auto] bg-slate-400 h-full"
      >
        <div>
          <NavLeft />
        </div>
        <div>
          <nav className="sticky top-0 z-10">
            <Navs />
          </nav>
          <div className="flex flex-col items-center">
            <PagesLayout />
          </div>
        </div>
      </div>}
    </Router>
  );
};

export default App;
