import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './Sendmail.css';
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage} from './features/mailSlice';
import { db } from './firebase';
import { collection, addDoc,serverTimestamp} from "firebase/firestore"; 


function Sendmail() {
    const { register, handleSubmit,formState: { errors },} = useForm();
    const dispatch = useDispatch();
     const onSubmit = (data) =>{  
         addDoc(collection(db,'emails'),{
            to:data.to,
            subject: data.subject,
            message: data.message,
            timestamp: serverTimestamp(),
        })
           console.log(data);           
        dispatch(closeSendMessage());
     };
    return (
        <div className="sendmail">
            <div className="sendmail-header">
                <h3>New message</h3>
                <Close onClick={() => dispatch(closeSendMessage())}
                 className="semdmail-close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <input placeholder="To" type="email" 
                  
                  {...register('to', { required: true })}                 
                  /> 
                  {errors.to && <p className="sendmail-error">To is required.</p>}                
                  <input  placeholder="Subject" type="text"                  
                  {...register('subject', { required: true })}
                  />
                  {errors.subject && <p  className="sendmail-error">Please enter your subject.</p>}
                  <input placeholder="Message..." 
                  type="text" 
                  className="sendmail-message"
                  {...register('message', { required: true })}                
                  />
                   {errors.message && <p  className="sendmail-error">Please enter your message.</p>}
                     <div className="sendmail-option">
                         <Button className="sendmail-send"
                         variant="contained"
                         color="primary"
                         type="submit"                       
                         >Send</Button>
                     </div>
            </form>
        </div>
    )
}

export default Sendmail;
