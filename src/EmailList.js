import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings,
Inbox,People,LocalOffer
} from '@material-ui/icons';
//import InboxIcon from "@material-ui/icons/Inbox";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import React,{useState,useEffect} from 'react';
import './EmailList.css';
import Emailrow from './Emailrow';
import { db } from './firebase';
import { collection, getDocs, orderBy } from "firebase/firestore";
import Section from './Section';
import {useNavigate} from "react-router-dom";

function EmailList() {
    const navigate = useNavigate();
    const [emails, setEmails] = useState([]);
    const emailcollection = collection(db,"emails");
    useEffect(() =>{
        const getUsers =  async () => {       
            const data = await getDocs(emailcollection, orderBy("timestamp", "asc"));   
                     
               setEmails(data.docs.map((doc) => ({
                //...doc.data(), id: doc.id     
                id: doc.id,
                data: doc.data(),                   
               }))
               );                             
          };
          getUsers();
    },[emailcollection])
    return (
        <div className="emaillist">
              <div className="emaillist-setting">
                   <div className="emaillist-settingleft">
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
                   <div className="emaillist-settingright">
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
              <div className="emaillist-section">
                    <Section  onClick={() => navigate("/")} Icon={Inbox} title="Primary" color="red" selected />
                    <Section onClick={() => navigate("/social")} Icon={People} title="Social" color="#1A73E8" />
                    <Section  onClick={() => navigate("/promotion")} Icon={LocalOffer} title="Promotions" color="green"  />
              </div>
              <div className="emailist-list">
                  {emails.map(({id,data: {to,subject,message,timestamp}}) =>(
                      <Emailrow 
                         id={id}
                          key={id}
                         title={to}
                         subject={subject}
                         description={message}
                        //time={new Date(timestamp?.seconds * 1000 ).toUTCString()}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                      
                      />
                  )                   
                   )}
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
                             <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="This is a test"
                            time="11am" />
                  <Emailrow title="Twitch"
                            subject="Hey fellow streamer!!!"
                            description="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"
                            time="11am" />
              </div>
        </div>
    )
}

export default EmailList
