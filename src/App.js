import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import Sendmail from './Sendmail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import Starred from './Starred';
import Snoozed from './Snoozed';
import Sent from './Sent';
import Drafts from './Drafts';
import More from './More';
import Importent from './Importent';
import Social from './Social';
import Promotion from './Promotion';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const authapp = auth;
  useEffect(() => {
    onAuthStateChanged(authapp, (user) => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }));
      }
    });
  }, [authapp, dispatch])
  return (
  <Router>
    {!user ?(
      <Login />
    ):(
    <div className="App">
      <Header />
          <div className="app-body">
             <Sidebar />  
             <Routes>
                      <Route path="/social"
                        element={<Social />}
                      />
                      <Route path="/promotion"
                        element={<Promotion />}
                      />
                      <Route path="/mail"
                        element={<Mail />}
                      />
                      <Route path="/"
                      element={ <EmailList />}
                      />
                       <Route path="/starred"
                      element={ <Starred />}
                      />
                        <Route path="/snoozed"
                      element={ <Snoozed />}
                      />
                        <Route path="/importent"
                      element={ <Importent />}
                      />
                      <Route path="/sent"
                      element={ <Sent/>}
                      />
                       <Route path="/drafts"
                      element={ <Drafts/>}
                      />
                         <Route path="/more"
                      element={ <More/>}
                      />
             </Routes>
          </div> 
         {sendMessageIsOpen && <Sendmail />}
    </div>
    )}
  </Router>
  );
}

export default App;
