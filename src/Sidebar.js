import React from 'react'
import "./Sidebar.css";
import AddIcons from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportaniIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import {useNavigate} from "react-router-dom";

function Sidebar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <Button startIcon={ <AddIcons fontSize="large"  
            />}
            onClick={() => dispatch(openSendMessage())}
            className="sidebar-compose"
            >Compose</Button>
            <SidebarOption onClick={() => navigate("/")}  Icon={InboxIcon} title="Inbox" number={54}
              selected={true}
            />
            <SidebarOption  onClick={() => navigate("/starred")} Icon={StarIcon} title="Starred" number={54} />
            <SidebarOption onClick={() => navigate("/snoozed")} Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOption onClick={() => navigate("/importent")} Icon={LabelImportaniIcon} title="Important" number={54} />
            <SidebarOption onClick={() => navigate("/sent")} Icon={NearMeIcon} title="Sent" number={54} />
            <SidebarOption onClick={() => navigate("/drafts")} Icon={NoteIcon} title="Drafts" number={54} />
            <SidebarOption onClick={() => navigate("/more")} Icon={ExpandMoreIcon} title="More" number={54} />
             <div className="sidebar-footer">
                   <div className="sidebar-footerIcons">
                       <IconButton>
                          <PersonIcon />
                       </IconButton>
                       <IconButton>
                           <DuoIcon />
                       </IconButton>
                       <IconButton>
                           <PhoneIcon />
                       </IconButton>
                   </div>
             </div>
        </div>
    );
}

export default Sidebar;
