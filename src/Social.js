import React from 'react';
import './Social.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete, LabelImportant, MoreVert, StarBorderOutlined
    } from '@material-ui/icons';

function Social() {
    return (
        <div className="social">
               <div className="social-option">
                  <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportant />
                </IconButton>
             </div>
             <h3 className="social-title">
                    Homework
             </h3>
             <div className="social-message">
              <h4>
                Apply
               <span className="social-description">
                <p>I want to you apply to your company</p>
               </span>
               </h4>
             </div>
             <div className="social-description">
                 12:00pm
             </div> 
             <div className="social-description">
                <IconButton>
                    <Delete />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>                                                           
        </div>        
    )
}

export default Social;
