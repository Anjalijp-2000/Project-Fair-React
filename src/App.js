import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

</Routes>
      <Footer/>
    </div>
  );
}

export default App;
