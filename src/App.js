
import { createContext, useState } from 'react';
import './App.css';
import Register from './Screens/Register';
import DisplayPage from './Screens/DisplayPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';


export const AppContext = createContext(null);
function App() {


  const [data, setData ] = useState([]);
  
  return (
    <AppContext.Provider value={{data, setData}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}   />
        <Route path='/register' element={<Register/>}   />
        <Route path='/display' element={<DisplayPage/>}   />
      </Routes>
  
     </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
