import './App.css';
import LoginPage from './LoginFolder/LoginPage';
import ChatDashboard from './chatDashboard/ChatDashboard';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import ForgetPass from './LoginFolder/ForgetPass';
import SignupForm from './signUp/signup';
import { useEffect, useState } from 'react';

function CheckActiveUser({element, activeUser}){
  const navi= useNavigate();
  useEffect(() =>{
    if(!activeUser){
      navi('/');
    }
  }, [activeUser, navi]);

  return activeUser ? element : null;
}

function App() {

const [activeUser , setActiveUser] = useState("");

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage setActiveUser={setActiveUser}/>}/>
            <Route path='/SignUp' element={<SignupForm/>}/>
            <Route path='/Chat' element={<CheckActiveUser activeUser={activeUser}
            element={<ChatDashboard activeUser={activeUser}/>}/>}/>
            <Route path='/Forget' element={<ForgetPass/>}/> 
          </Routes>
        </BrowserRouter> 
      </div>
  );
}

export default App;
