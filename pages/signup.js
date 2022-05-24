import React from "react";
import { signInWithGooglePopup } from '../utils/firebase/firebase.utils'

function Signup() {

  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response)
  }

  return (
    <div className="container">
      <h1>Signup</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
    </div>
    )
}

export default Signup;
