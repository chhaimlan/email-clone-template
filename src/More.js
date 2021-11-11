import React from 'react';
import './More.css';
import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings,
    ArrowDropDown
    } from '@material-ui/icons';
import Social from './Social';
function More() {
    return (
        <div className="more">
              <div className="more-setting">
                   <div className="more-settingleft">
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
                   <div className="more-settingright">
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

export default More;
