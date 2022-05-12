import React from 'react'
import { auth } from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function Chat() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <div>chat</div> : <div>Giris yap</div>}
    </div>
  )
}

export default Chat