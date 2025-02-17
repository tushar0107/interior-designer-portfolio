import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Header } from './Base';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppContext } from './Context';
import { useState } from 'react';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
    <Provider store={store}>
      <AppContext.Provider value={{menuOpen,setMenuOpen}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </AppContext.Provider>
    </Provider>
    </>
  );
}

export default App;
