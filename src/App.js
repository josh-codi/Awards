import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About'
import Terms from './Pages/Terms/Terms'
import Awards from './Pages/AwardsPage/Awards'
import Award from './Pages/Award/Award'
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Categories from './Pages/Categories/Categories';
import Nominee from './Pages/Nominee/Nominee';

function App() {
  return (
    <div className="App container border h-screen">
      <Header/>
      <div className={`w-full border`} style={{height: 'calc(100% - 65px)', overflowY: 'auto'}}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/terms' element={<Terms/>} />

          <Route path='/awards/:id' element={<Awards/>} />
          <Route path='/categories/:id' element={<Categories/>} />
          <Route path='/nominee/:id' element={<Nominee/>} />

        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
