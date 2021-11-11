import React from 'react';
import './Promotion.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete, LabelImportant, MoreVert, StarBorderOutlined
    } from '@material-ui/icons';

function Promotion() {
    return (
        <div className="promotion">
               <div className="promotion-option">
                  <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportant />
                </IconButton>
             </div>
             <h3 className="promotion-title">
                    From UID
             </h3>
             <div className="promotion-message">
              <h4>
                Announcement
               <span className="promotion-description">
                <p>Hey do you have time to join with us about business learning or training!</p>
               </span>
               </h4>
             </div>
             <div className="promotion-description">
                 10:00am
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

export default Promotion;
