import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserData from './components/UserData';
import Menu from './components/Menu';
import AddData from './components/AddData';
import SearchData from './components/SearchData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<UserData/>}/>
        <Route path="/adddata" element={<AddData/>}/>
        <Route path="/searchdata" element={<SearchData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
