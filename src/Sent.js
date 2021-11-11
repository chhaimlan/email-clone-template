import React from 'react';
import './Sent.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings,
    ArrowDropDown
    } from '@material-ui/icons';
import Social from './Social';
function Sent() {
    return (
        <div className="sent">
              <div className="sent-setting">
                   <div className="sent-settingleft">
                        <Checkbox />
                        <IconButton>
                             <ArrowDropDown />
                        </IconButton>
                        <IconButton>
                            <Redo />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                   </div>
                   <div className="sent-settingright">
                       <IconButton>
                            <ChevronLeft />
                       </IconButton>
                       <IconButton>
                            <ChevronRight />
                       </IconButton>
                       <IconButton>
                           <KeyboardHide />
                       </IconButton>
                       <IconButton>
                            <Settings />
                       </IconButton>
                   </div>
              </div>
             <Social />
            
        </div>
    )
}

export default Sent;
