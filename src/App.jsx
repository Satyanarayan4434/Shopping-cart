import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainheader from './components/Mainheader';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route to='/' element={<Mainheader/>}>
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;
