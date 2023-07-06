import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About'
import Awards from './Pages/AwardsPage/Awards'
import Award from './Pages/Award/Award'
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';

function App() {
  return (
    <div className="App container border h-screen">
      <Header/>
      <div className={`w-full border`} style={{height: 'calc(100% - 65px)'}}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/awards' element={<Awards/>} />
          <Route path='/award:id' element={<Award/>} />

        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
