import React from 'react';
import Login from './components/login/Login';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';


function App() {

  return (
    <div>  
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
          </Routes>
          </div>
    </div>
  );
}

export default App;



