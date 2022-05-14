import React,{useState} from 'react'
import {db, auth} from '../../firebase'
import firebase from 'firebase/compat/app';
import { Input, Button } from 'reactstrap';
import './SendMessage.css'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input className='sendMessage__input' value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message...'/>
        <Button className='sendMessage__button' type="submit">Send</Button>
      </form>  
    </div>
  )
}

export default SendMessage