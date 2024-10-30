import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Header } from './Base';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

 
  return (
    <>
    <Provider store={store}>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
