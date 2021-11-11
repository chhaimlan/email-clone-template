import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error,
LabelImportant,MoreVert,WatchLater, 
Archive, UnfoldMore, Print, ExitToApp
} from '@material-ui/icons';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import React from 'react';
import './Mail.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
    const navigate = useNavigate();
    const email = useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-toolleft">
                  <IconButton onClick={() => navigate("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                         <Archive />
                    </IconButton>
                    <IconButton>
                         <Error />
                    </IconButton>
                    <IconButton>
                         <Delete />
                    </IconButton>
                    <IconButton>
                         <Email />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <DriveFileMoveIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    
                </div>
                <div className="mail-tooright">
                      <IconButton>
                           <UnfoldMore />                           
                      </IconButton>
                      <IconButton>
                           <Print />                           
                      </IconButton>
                      <IconButton>
                           <ExitToApp />                           
                      </IconButton>
                </div>
            </div>
            <div className="mail-body">
                <div className="mail-bodyHeader">
                    <h2>{email?.subject}</h2>
                    <LabelImportant className="mail-importan" />
                    <p>{email?.title}</p>
                    <p className="mail-time">{email?.time}</p>
                </div>
                <div className="mail-message">
                  <p>{email?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
