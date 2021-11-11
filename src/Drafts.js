import React from 'react';
import './Drafts.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings,
    ArrowDropDown
    } from '@material-ui/icons';
import Promotion from './Promotion';
function Drafts() {
    return (
        <div className="drafts">
              <div className="drafts-setting">
                   <div className="drafts-settingleft">
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
                   <div className="drafts-settingright">
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
              <Promotion />
            
        </div>
    )
}

export default Drafts;
