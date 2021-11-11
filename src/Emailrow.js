import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportant, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import './Emailrow.css';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectedMail } from './features/mailSlice';

function Emailrow({id, title,subject,description,time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
        const openMail = () =>{
           dispatch(selectedMail({
               id,
               title,
               subject,
               description,
               time,
           })) 
           navigate("/mail");
        };
    return (
        //() => navigate("/mail")
        <div onClick={openMail} className="emailrow">
             <div className="emailrow-option">
                  <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportant />
                </IconButton>
             </div>
             <h3 className="emailrow-title">
                    {title}
             </h3>
             <div className="emailrow-message">
              <h4>
                    {subject}              
               <span className="emailrow-description">
                   {description}
               </span>
               </h4>
             </div>
             <div className="emailrow-description">
                  {time}
             </div>
             
        </div>
    )
}

export default Emailrow


