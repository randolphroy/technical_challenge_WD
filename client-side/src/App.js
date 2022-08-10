import './App.css';
import PhoneListPage from './PhoneList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={ <PhoneListPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
