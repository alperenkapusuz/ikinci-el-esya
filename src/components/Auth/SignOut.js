import React from 'react'
import { Button } from 'reactstrap';
import {auth} from '../../firebase'

function SignOut() {
  return (
    <div>
        <Button onClick={() => auth.signOut()}>Çıkış Yap</Button>
    </div>
  )
}

export default SignOut