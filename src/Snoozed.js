import React from 'react';
import './Snoozed.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings,
    ArrowDropDown
    } from '@material-ui/icons';
    import Social from './Social';

function Snoozed() {
    return (
        <div className="snoozed">
              <div className="snoozed-setting">
                   <div className="snoozed-settingleft">
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
                   <div className="snoozed-settingright">
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

export default Snoozed
