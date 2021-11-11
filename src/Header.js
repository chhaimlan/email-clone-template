import React from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropdown from '@material-ui/icons/ArrowDropDown';
import AppIcon from '@material-ui/icons/Apps';
import NoticationIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {signOut } from "firebase/auth";
function Header() {
  const authapp = auth;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const SignOut = () =>{
    signOut(authapp).then(() => {
      dispatch(logout({
          
      }));
    })    
  };
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                   <MenuIcon />
                </IconButton>
                <img src="https://techmende.com/wp-content/uploads/2021/07/GMAIL-by-Google.jpg"
                alt="" />
            </div>
            <div className="header-midle">
                 <SearchIcon />
                 <input placeholder="Search mail" type="text" />
                 <ArrowDropdown className="header-iput" />
            </div>
            <div className="header-right">
               <IconButton>
                 <AppIcon />
               </IconButton> 
               <IconButton>
                 <NoticationIcon />
               </IconButton> 
               <Avatar onClick={SignOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
